const Card = require('../../Card.js');

class TheFittest extends Card {
    //Play: Give each friendly creature a +1 power counter.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.addPowerCounter((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                amount: 1
            }))
        });
    }
}

TheFittest.id = 'the-fittest';

module.exports = TheFittest;
