const Card = require('../../Card.js');

class LuckyDice extends Card {
    //Omni: Destroy $this. During your opponent’s next turn, friendly creatures cannot be dealt damage.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sequential([
                ability.actions.destroy((context) => ({
                    target: context.source
                })),
                ability.actions.cardLastingEffect({ effect: ability.effects.cardCannot('damage') })
            ])
        });
    }
}

LuckyDice.id = 'lucky-dice';

module.exports = LuckyDice;
