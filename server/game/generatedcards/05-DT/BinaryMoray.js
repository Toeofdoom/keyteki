const Card = require('../../Card.js');

class BinaryMoray extends Card {
    //After you raise the tide, ready $this.
    //After your opponent raises the tide, exhaust $this.
    //Reap: Archive a card.
    //This card is translated from Portuguese and is subject to change.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onRaiseTide: (event, context) => event.player === context.player
            },
            gameAction: ability.actions.ready((context) => ({
                target: context.source
            }))
        });
        this.reaction({
            when: {
                onRaiseTide: (event, context) => event.player !== context.player
            },
            gameAction: ability.actions.exhaust((context) => ({
                target: context.source
            }))
        });
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive({ location: 'hand' })
            }
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card is translated from Portuguese and is subject to change."
          ]
        }*/
    }
}

BinaryMoray.id = 'binary-moray';

module.exports = BinaryMoray;
