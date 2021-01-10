const Card = require('../../Card.js');

class TakeHostages extends Card {
    //Play: For the remainder of the turn, each time a friendly creature fights, it captures 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onFight: (event, context) =>
                        event.attacker.controller === context.player &&
                        event.attacker.type === 'creature'
                },
                gameAction: ability.actions.capture((context) => ({
                    target: context.event.attacker,
                    amount: 1
                }))
            })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "forRemainderOfTurn",
          "durationEffect": {
            "name": "reaction",
            "trigger": {
              "trigger": "fight",
              "card": {
                "type": "creature",
                "controller": "self"
              }
            },
            "actions": {
              "default": [
                {
                  "name": "capture",
                  "amount": 1,
                  "target": {
                    "mode": "it"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
]
*/

TakeHostages.id = 'take-hostages';

module.exports = TakeHostages;
