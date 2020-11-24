const Card = require('../../Card.js');

class Inspiration extends Card {
    //Play: Ready and use a friendly creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.use()
                ])
            }
        });
    }
}

Inspiration.id = 'inspiration';

module.exports = Inspiration;
