/*eslint no-console:0 */

const path = require('path');
const fs = require('fs');
const _ = require('underscore');
const nunjucks = require('nunjucks');
const peg = require('pegjs');

class CardGenerator {
    constructor(dataSource, fullOutputDir, partialOutputDir, comments) {
        this.dataSource = dataSource;
        this.fullOutputDir = fullOutputDir;
        this.partialOutputDir = partialOutputDir;
        this.template = 'Card.njk';
        this.comments = comments;
        try {
            console.log('Starting card parser');
            let grammar = fs.readFileSync(path.join(__dirname, 'keyforgeGrammar.pegjs'), 'utf8');
            this.parser = peg.generate(grammar);
            console.log('Card parser started');
        } catch (err) {
            console.log('Could not set up parser');
            console.log(err);
        }

        this.complete = 0;
        this.partial = 0;
        this.skipped = 0;
        this.error = 0;
    }

    async generate() {
        try {
            await this.generateCards();
        } catch (e) {
            console.log('Unable to fetch data', e);
        }
    }

    async generateCards() {
        console.log('Clearing out previously generated cards');
        fs.rmdirSync(this.fullOutputDir, { recursive: true });
        fs.rmdirSync(this.partialOutputDir, { recursive: true });
        console.log('Loading card information');
        let cards = await this.dataSource.getCards();
        cards = cards.sort((a, b) => (a.expansion > b.expansion ? -1 : 1));

        let expansionPaths = {
            CotA: '01-Core',
            AoA: '02-AoA',
            WC: '03-WC',
            MM: '04-MM'
        };

        let cardsById = _.groupBy(cards, (card) => card.id);
        cards = Object.values(cardsById).map((duplicates) =>
            Object.assign(duplicates[0], {
                folder: expansionPaths[duplicates[duplicates.length - 1].packCode]
            })
        );

        //We are not generating HTML and we are not using an input that is a very sensible attack vector so there's not much point escaping everything.
        var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname), {
            autoescape: false
        });
        env.addFilter('sortEffects', sortEffects);
        env.addFilter('upgradeRefs', upgradeRefs);
        env.addFilter('itIs', itIs);
        env.addFilter('check', check);

        console.log('Card information loaded');
        for (let card of cards) {
            let simplifiedText = card.text.split(card.name).join('$this');
            let data = {
                name: this.camelCase(card.name),
                card: card,
                abilities: this.parseAbilities(simplifiedText),
                text: simplifiedText.split(/[\n\r]+/g),
                comments: this.comments,
                refs: baseRefs()
            };

            if (data.abilities == null) {
                console.log(`Null abilities for ${card.id}`);
                this.error++;
                continue;
            }

            let complete = isComplete(data.abilities);
            let skippable = ['reminderText', 'keywords'];
            if (complete && data.abilities.every((ability) => skippable.includes(ability.name))) {
                this.skipped++;
                continue;
            }

            let dir = complete ? this.fullOutputDir : this.partialOutputDir;
            let filename = path.join(dir, card.folder, `${data.name}.js`);
            let a = this;

            try {
                var str = env.render(this.template, data);
                ensureDirectoryExistence(filename);
                fs.writeFileSync(filename, str);
                if (complete) a.complete++;
                else a.partial++;
            } catch (err) {
                console.log(`Failure when generating code from parsed abilities for ${card.id}`);
                console.log(JSON.stringify(data.abilities, null, 1));
                console.log(`error:${err}`);
                this.error++;
            }
        }
        console.info(this.complete + ' cards completely converted');
        console.info(this.partial + ' cards partially converted');
        console.info(this.skipped + ' cards skipped');
        console.info(this.error + ' cards failed');
    }

    parseAbilities(text) {
        try {
            return this.parser.parse(text);
        } catch (err) {
            console.log('Could not parse abilities: ');
            console.log(text);
            console.log(err.message);
            console.log(JSON.stringify(err.location));
            //console.log(`???: ${JSON.stringify(err)}`);
        }
    }

    camelCase(name) {
        let digitStrings = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine'
        ];
        return name
            .toLowerCase()
            .replace(/^[0-9]/, (m) => digitStrings[parseInt(m)])
            .replace('æ', 'a')
            .replace(/['’]/g, '')
            .replace(/\b([A-Za-z])/g, (m, chr) => chr.toUpperCase())
            .replace(/[,?.!"„“” \-[\]]/g, '');
    }
}

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

function isComplete(abilities) {
    try {
        return (
            abilities === null ||
            typeof abilities === 'string' ||
            typeof abilities === 'number' ||
            typeof abilities === 'boolean' ||
            (abilities.name !== 'unknown' && Object.values(abilities).every(isComplete))
        );
    } catch (err) {
        console.log(abilities);
        console.log(err);
    }
}

function sortEffects(effects) {
    //This function will need to get smarter to support other cards.
    //Actual rules should be:
    //Sentence by sentence.
    //Some sentences combine.
    // * Choose + effect. (Probably combined in parser?)
    // * Something + instead.
    // * Damage sentences (e.g. they're everywhere.)
    // Effects will be chained using Then.
    let firstEffect = {
        optional: false,
        targets: [],
        default: [],
        then: null,
        unknown: []
    };

    let lastEffect = firstEffect;

    for (let effect of effects) {
        if (isReplacementEffect(effect)) {
            //Handle replacement effect logic?
        } else {
            let previousEffects = lastEffect.targets.concat(lastEffect.default);
            if (
                effect.then ||
                (previousEffects.length > 0 &&
                    !(isDamageEffect(effect) && previousEffects.some(isDamageEffect)) &&
                    isTargetted(effect))
            ) {
                let newEffect = {
                    optional: false,
                    targets: [],
                    default: [],
                    then: null,
                    unknown: [],
                    alwaysTriggers: !effect.then
                };
                lastEffect.then = newEffect;
                lastEffect = newEffect;
            }
            if (effect.optional) lastEffect.optional = true;
            if (isTargetted(effect)) {
                lastEffect.targets.push(effect);
            } else {
                lastEffect.default.push(effect);
            }
        }
    }
    return firstEffect;
}

function isDamageEffect(effect) {
    return effect.name === 'dealDamage';
}

function isReplacementEffect(effect) {
    return effect.name === 'instead'; //Not implemented yet
}

function isTargetted(effect) {
    let untargettedModes = ['all', 'self', 'trigger'];
    return (
        effect.target && effect.target != '$this' && !untargettedModes.includes(effect.target.mode)
    );
}

function baseRefs() {
    return {
        this: 'context.source',
        it: 'context.target',
        check: 'card'
    };
}

function upgradeRefs(refs) {
    return Object.assign({}, refs, { this: 'this' });
}

function itIs(refs, it) {
    return Object.assign({}, refs, { it: it });
}

function check(refs, card) {
    return Object.assign({}, refs, { check: card });
}

module.exports = CardGenerator;
