const Card = require('../../Card.js');

class TheyReEverywhere extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
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
            ]
        });
    }
}

TheyReEverywhere.id = 'they-re-everywhere';

module.exports = TheyReEverywhere;
