const Card = require('../../Card.js');

class Stunner extends Card {
    //This creature gains, “Fight/Reap: You may stun a creature.”
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                optional: true,
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.stun()
                }
            })
        });
    }
}

Stunner.id = 'stunner';

module.exports = Stunner;
