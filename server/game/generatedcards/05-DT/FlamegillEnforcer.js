const Card = require('../../Card.js');

class FlamegillEnforcer extends Card {
    //After your opponent raises the tide, enrage $this.
    //Action: Capture 3A.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onRaiseTide: (event, context) => event.player !== context.player
            },
            gameAction: ability.actions.enrage((context) => ({
                target: context.source
            }))
        });
        this.action({
            gameAction: ability.actions.capture({ amount: 3 })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

FlamegillEnforcer.id = 'flamegill-enforcer';

module.exports = FlamegillEnforcer;
