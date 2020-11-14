const Card = require('../../Card.js');

class RoundTable extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type == 'creature' && card.hasTrait('knight'),
            effect: [
                ability.effects.modifyPower({ amount: 1 }),
                ability.effects.addKeyword({
                    taunt: 1
                })
            ]
        });
    }
}

RoundTable.id = 'round-table';

module.exports = RoundTable;
