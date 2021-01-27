const Card = require('../../Card.js');

class LongfusedMines extends Card {
    //Omni: Sacrifice $this. Deal 3D to each enemy creature not on a flank.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sequential([
                ability.actions.sacrifice((context) => ({
                    target: context.source
                })),
                ability.actions.dealDamage((context) => ({
                    target: context.player.opponent.creaturesInPlay.filter(
                        (card) => !card.isOnFlank()
                    ),
                    amount: 3
                }))
            ])
        });
    }
}

LongfusedMines.id = 'longfused-mines';

module.exports = LongfusedMines;
