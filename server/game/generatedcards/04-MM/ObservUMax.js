const Card = require('../../Card.js');

class ObservUMax extends Card {
    //This creature gains, “Fight/Reap: Capture 1A.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                gameAction: ability.actions.capture({ amount: 1 })
            })
        });
    }
}

ObservUMax.id = 'observ-u-max';

module.exports = ObservUMax;
