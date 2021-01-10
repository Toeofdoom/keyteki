const Card = require('../../Card.js');

class MadProphetGizelhart extends Card {
    //While $this is in the center of your battleline, it gains, “Action: Fully heal each non-Mutant creature. Gain 1A for each creature healed this way.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            condition: (context) => context.source.isInCenter(),
            effect: ability.effects.gainAbility('action', {
                gameAction: ability.actions.heal((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('mutant')),
                    fully: true
                })),
                then: {
                    alwaysTriggers: true,
                    gameAction: ability.actions.gainAmber((context) => ({
                        amount:
                            1 *
                            context.preThenEvents.filter(
                                (event) => !event.cancelled && event.amount > 0
                            ).length
                    }))
                }
            })
        });
    }
}

MadProphetGizelhart.id = 'mad-prophet-gizelhart';

module.exports = MadProphetGizelhart;
