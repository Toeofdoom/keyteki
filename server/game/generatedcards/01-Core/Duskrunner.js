const Card = require('../../Card.js');

class Duskrunner extends Card {
    //This creature gains, “Reap: Steal 1A.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.steal({ amount: 1 })
            })
        });
    }
}

Duskrunner.id = 'duskrunner';

module.exports = Duskrunner;
