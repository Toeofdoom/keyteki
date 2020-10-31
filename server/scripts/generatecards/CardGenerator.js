/*eslint no-console:0 */

const path = require('path');
const fs = require('fs');
const _ = require('underscore');
const ejs = require('ejs');
const peg = require('pegjs');

class CardGenerator {
    constructor(dataSource, fullOutputDir, partialOutputDir) {
        this.dataSource = dataSource;
        this.fullOutputDir = fullOutputDir;
        this.partialOutputDir = partialOutputDir;
        this.template = path.join(__dirname, 'Card.ejs');
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

        console.log('Card information loaded');

        for (let card of cards) {
            let simplifiedText = card.text.replace(card.name, '$this');
            let data = {
                name: this.camelCase(card.name),
                card: card,
                abilities: this.parseAbilities(simplifiedText)
            };

            if (data.abilities == null) {
                this.error++;
                continue;
            }

            let dir = isComplete(data.abilities) ? this.fullOutputDir : this.partialOutputDir;
            let filename = path.join(dir, card.folder, `${data.name}.js`);
            let a = this;

            ejs.renderFile(this.template, data, {}, function (err, str) {
                if (err) {
                    console.log(
                        `Failure when generating code from parsed abilities for ${card.id}`
                    );
                    console.log(JSON.stringify(data.abilities, null, 1));
                    console.log(`error:${err}`);
                    this.error++;
                } else {
                    ensureDirectoryExistence(filename);
                    fs.writeFileSync(filename, str);
                    if (isComplete(data.abilities)) a.complete++;
                    else a.partial++;
                }
            });
        }
        console.info(this.complete + ' cards completely converted');
        console.info(this.partial + ' cards partially converted');
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
            .replace(/[']/g, '')
            .replace(/\b([A-Za-z])/g, (m, chr) => chr.toUpperCase())
            .replace(/[,?.!"„“” ’\-[\]]/g, '');
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

module.exports = CardGenerator;
