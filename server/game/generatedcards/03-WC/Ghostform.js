const Card = require('../../Card.js');

class Ghostform extends Card {
    //This creature gains invulnerable. (It cannot be destroyed or dealt damage.)
    //This creature gains, “Fight/Reap: Archive $this.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.addKeyword({
                invulnerable: 1
            })
        });
        this.whileAttached({
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                gameAction: ability.actions.archive({
                    target: this,
                    location: 'hand'
                })
            })
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "mode": "this"
    },
    "effects": [
      {
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "invulnerable"
          }
        ]
      }
    ]
  },
  {
    "name": "persistentEffect",
    "target": {
      "mode": "this"
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "fight",
          "extraTriggers": [
            "reap"
          ],
          "actions": {
            "default": [
              {
                "name": "archive",
                "target": {
                  "mode": "self",
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

Ghostform.id = 'ghostform';

module.exports = Ghostform;
