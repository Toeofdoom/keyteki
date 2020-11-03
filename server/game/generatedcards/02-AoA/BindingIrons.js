const Card = require('../../Card.js');

class BindingIrons extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainChains((context) => ({
                amount: 3,
                target: context.player.opponent
            }))
        });
    }
}

BindingIrons.id = 'binding-irons';

module.exports = BindingIrons;
