const Card = require('../../Card.js');

class BarnRazing extends Card {
    //Play: For the remainder of the turn, your opponent loses 1A each time a friendly creature fights.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onFight: (event, context) =>
                        event.attacker.controller === context.player &&
                        event.attacker.type === 'creature'
                },
                gameAction: ability.actions.loseAmber({ amount: 1 })
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
                  "name": "loseAmber",
                  "amount": 1,
                  "targetPlayer": "opponent"
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

BarnRazing.id = 'barn-razing';

module.exports = BarnRazing;
