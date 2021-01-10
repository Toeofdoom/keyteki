const Card = require('../../Card.js');

class Nerotaurus extends Card {
    //Fight: Enemy creatures cannot reap during your opponent’s next turn.
    //Reap: Enemy creatures cannot fight during your opponent’s next turn.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.cardLastingEffect({
                effect: ability.effects.cardCannot('reap')
            })
        });
        this.reap({
            gameAction: ability.actions.cardLastingEffect({
                effect: ability.effects.cardCannot('fight')
            })
        });
    }
}

Nerotaurus.id = 'nerotaurus';

module.exports = Nerotaurus;
