const Card = require('../../Card.js');

class Knoxx extends Card {
    //$this gets +3 power for each neighbor it has.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyPower(
                (card, context) =>
                    3 *
                    context.game.creaturesInPlay.filter((card) =>
                        context.source.neighbors.includes(card)
                    ).length
            )
        });
    }
}

Knoxx.id = 'knoxx';

module.exports = Knoxx;
