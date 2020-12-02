const Card = require('../../Card.js');

class GormOfOmm extends Card {
    //Omni: Destroy $this. Destroy an artifact.
    //
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.destroy((context) => ({
                target: context.source
            })),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'artifact',
                    gameAction: ability.actions.destroy()
                }
            }
        });
    }
}

GormOfOmm.id = 'gorm-of-omm';

module.exports = GormOfOmm;
