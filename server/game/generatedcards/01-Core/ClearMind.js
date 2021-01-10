const Card = require('../../Card.js');

class ClearMind extends Card {
    //Play: Unstun each friendly creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.removeStun((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                )
            }))
        });
    }
}

ClearMind.id = 'clear-mind';

module.exports = ClearMind;
