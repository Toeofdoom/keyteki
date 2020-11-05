const Card = require('../../Card.js');

class Rotgrub extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.loseAmber({ amount: 1 })
        });
        this.reap({
            gameAction: ability.actions.archive((context) => ({
                target: context.source
            }))
        });
    }
}

Rotgrub.id = 'rotgrub';

module.exports = Rotgrub;
