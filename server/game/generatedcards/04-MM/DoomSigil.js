const Card = require('../../Card.js');

class DoomSigil extends Card {
    //Each creature gains poison.
    //If there are no creatures in play, destroy $this.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.addKeyword({
                poison: 1
            })
        });
        /*{
          "name": "comparison",
          "operator": "===",
          "b": {
            "name": "constant",
            "amount": 0
          },
          "a": {
            "name": "cards",
            "type": "creature",
            "controller": null,
            "conditions": []
          }
        }*/
        /*" "*/
        /*{
          "name": "destroy",
          "target": {
            "mode": "self"
          },
          "splash": null,
          "multiplier": null,
          "noPrevent": null,
          "optional": false,
          "condition": null
        }*/
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "type": "creature",
      "mode": "all"
    },
    "effects": [
      {
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "poison"
          }
        ]
      }
    ]
  },
  {
    "name": "comparison",
    "operator": "===",
    "b": {
      "name": "constant",
      "amount": 0
    },
    "a": {
      "name": "cards",
      "type": "creature"
    }
  },
  " ",
  {
    "name": "destroy",
    "target": {
      "mode": "self"
    }
  }
]
*/

DoomSigil.id = 'doom-sigil';

module.exports = DoomSigil;
