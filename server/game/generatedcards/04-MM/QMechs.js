const Card = require('../../Card.js');

class QMechs extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.draw({ amount: 1 })
        });
        this.destroyed({
            gameAction: ability.actions.archive((context) => ({
                target: context.source
            }))
        });
    }
}

QMechs.id = 'q-mechs';

module.exports = QMechs;
