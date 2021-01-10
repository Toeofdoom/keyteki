const Card = require('../../Card.js');

class TheyreEverywhere extends Card {
    //Play: Deal 2D to each enemy flank creature. Deal 1D to each enemy creature not on a flank.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => card.controller !== context.player && card.isOnFlank()
                    ),
                    amount: 2
                })),
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => card.controller !== context.player && !card.isOnFlank()
                    ),
                    amount: 1
                }))
            ])
        });
    }
}

TheyreEverywhere.id = 'they-re-everywhere';

module.exports = TheyreEverywhere;
