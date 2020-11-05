const Card = require('../../Card.js');

class WildSpirit extends Card {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.gainAbility('reap', {
                    gameAction: ability.actions.capture({ amount: 1 })
                })
            ]
        });
    }
}

WildSpirit.id = 'wild-spirit';

module.exports = WildSpirit;
