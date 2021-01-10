const Card = require('../../Card.js');

class CityStateInterest extends Card {
    //Play: Each friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                amount: 1
            }))
        });
    }
}

CityStateInterest.id = 'city-state-interest';

module.exports = CityStateInterest;
