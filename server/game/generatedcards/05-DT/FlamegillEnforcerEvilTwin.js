const Card = require('../../Card.js');

class FlamegillEnforcerEvilTwin extends Card {
    //After your opponent raises the tide, enrage $this.
    //Action: Steal 1A.
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
            gameAction: ability.actions.steal({ amount: 1 })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

FlamegillEnforcerEvilTwin.id = 'flamegill-enforcer-evil-twin';

module.exports = FlamegillEnforcerEvilTwin;
