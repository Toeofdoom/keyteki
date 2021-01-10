const Card = require('../../Card.js');

class Archimedes extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Each of $this’s neighbors gains, “Destroyed: Archive this creature.”
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.archive((context) => ({
                    target: context.source,
                    location: 'hand'
                }))
            })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "elusive"
      }
    ]
  },
  {
    "name": "persistentEffect",
    "target": {
      "mode": "all",
      "type": "creature",
      "conditions": [
        {
          "name": "neighboring"
        }
      ]
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "destroyed",
          "actions": {
            "default": [
              {
                "name": "archive",
                "target": {
                  "mode": "this",
                  "location": "hand",
                  "controller": "self"
                }
              }
            ]
          }
        }
      }
    ]
  }
]
*/

Archimedes.id = 'archimedes';

module.exports = Archimedes;
