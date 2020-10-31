/*eslint no-console:0 */

const path = require('path');
const fs = require('fs');
const _ = require('underscore');
const ejs = require('ejs');
const peg = require('pegjs');

class CardGenerator {
    constructor(dataSource, outputDir) {
        this.dataSource = dataSource;
        this.outputDir = outputDir;
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
    }

    async generate() {
        try {
            await this.generateCards();
        } catch (e) {
            console.log('Unable to fetch data', e);
        }
    }

    async generateCards() {
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
            let data = {
                name: card.name.replace(/[,?.!"„“” '’\-[\]]/gi, ''), //TODO: Fix casing
                card: card,
                abilities: this.parseAbilities(card.text)
            };
            let filename = path.join(this.outputDir, card.folder, `${data.name}.js`);

            ejs.renderFile(this.template, data, {}, function (err, str) {
                // str => Rendered HTML string
                if (err) {
                    console.error(err);
                }

                ensureDirectoryExistence(filename);
                fs.writeFileSync(filename, str);
            });
        }
        console.info(cards.length + ' cards fetched');
    }

    parseAbilities(text) {
        try {
            return this.parser.parse(text);
        } catch (err) {
            return {
                type: 'error',
                message: err.message
            };
        }
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

module.exports = CardGenerator;
