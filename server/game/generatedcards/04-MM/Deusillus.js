const Card = require('../../Card.js');

class Deusillus extends Card {
    //(Play only with the other half of $this.)
    //Play: Capture all of your opponent’s A. Deal 5D to an enemy creature.
    //Fight/Reap: Move 1A from $this to the common supply. Deal 2D to each enemy creature.
    setupCardAbilities(ability) {
        /*{
          "name": "reminderText",
          "keywords": [
            "(Play only with the other half of $this.)"
          ]
        }*/
        this.play({
            gameAction: ability.actions.capture({ all: true }),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    controller: 'opponent',
                    gameAction: ability.actions.dealDamage({ amount: 5 })
                }
            }
        });
        this.fight({
            reap: true,
            gameAction: ability.actions.sequential([
                ability.actions.removeAmber((context) => ({
                    target: context.source,
                    amount: 1
                })),
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => card.controller !== context.player
                    ),
                    amount: 2
                }))
            ])
        });
    }
}
/*
[
  {
    "name": "reminderText",
    "keywords": [
      "(Play only with the other half of $this.)"
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "capture",
          "amount": "all"
        }
      ],
      "then": {
        "targets": [
          {
            "type": "creature",
            "controller": "opponent",
            "mode": "exactly",
            "count": 1,
            "actions": [
              {
                "name": "dealDamage",
                "amount": 5
              }
            ]
          }
        ],
        "alwaysTriggers": true
      }
    }
  },
  {
    "name": "bold",
    "trigger": "fight",
    "extraTriggers": [
      "reap"
    ],
    "actions": {
      "default": [
        {
          "amount": 1,
          "target": {
            "mode": "self"
          },
          "name": "removeAmber"
        },
        {
          "name": "dealDamage",
          "amount": 2,
          "target": {
            "type": "creature",
            "controller": "opponent",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

Deusillus.id = 'deusillus2';

module.exports = Deusillus;
