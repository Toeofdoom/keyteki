const Card = require('../../Card.js');

class MercyMalkinQueen extends Card {
    //Skirmish.
    //After a friendly Cat creature enters play, ward it.
    //Fight: Ready a friendly Beast creature.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.reaction({
            when: {
                entersPlay: (event, context) =>
                    event.card.controller === context.player &&
                    event.card.type === 'creature' &&
                    event.card.hasTrait('cat')
            },
            gameAction: ability.actions.ward((context) => ({
                target: context.event.card
            }))
        });
        this.fight({
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => card.hasTrait('beast'),
                gameAction: ability.actions.ready()
            }
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "skirmish"
      }
    ]
  },
  {
    "name": "reaction",
    "trigger": {
      "trigger": "entersPlay",
      "card": {
        "type": "creature",
        "controller": "self",
        "conditions": [
          {
            "name": "trait",
            "trait": "cat"
          }
        ]
      }
    },
    "actions": {
      "default": [
        {
          "name": "ward",
          "target": {
            "mode": "it"
          }
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "conditions": [
            {
              "name": "trait",
              "trait": "beast"
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "ready"
            }
          ]
        }
      ]
    }
  }
]
*/

MercyMalkinQueen.id = 'mercy-malkin-queen';

module.exports = MercyMalkinQueen;
