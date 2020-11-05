const Card = require('../../Card.js');

class GormOfOmm extends Card {
    setupCardAbilities(ability) {
        this.omni({
            target: {
                cardType: 'artifact',
                gameAction: ability.actions.destroy()
            },
            gameAction: ability.actions.destroy((context) => ({
                target: context.source
            }))
        });
    }
}

GormOfOmm.id = 'gorm-of-omm';

module.exports = GormOfOmm;
