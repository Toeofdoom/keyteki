const Card = require('../../Card.js');

class Berinon extends Card {
    //After a Mutant creature enters play, enrage $this.
    //Reap: Capture 2A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: (event) =>
                    event.card.type === 'creature' && event.card.hasTrait('mutant')
            },
            gameAction: ability.actions.enrage((context) => ({
                target: context.source
            }))
        });
        this.reap({
            gameAction: ability.actions.capture({ amount: 2 })
        });
    }
}

Berinon.id = 'berinon';

module.exports = Berinon;
