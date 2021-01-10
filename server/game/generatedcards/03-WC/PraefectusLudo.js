const Card = require('../../Card.js');

class PraefectusLudo extends Card {
    //Each other friendly creature gains, “Destroyed: Move each A from this creature to the common supply.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card, context) => card.type === 'creature' && card !== context.source,
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.removeAmber((context) => ({
                    target: context.source,
                    all: true
                }))
            })
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "type": "creature",
      "controller": "self",
      "conditions": [
        {
          "name": "other"
        }
      ],
      "mode": "all"
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
                "amount": "all",
                "target": {
                  "mode": "this"
                },
                "name": "removeAmber"
              }
            ]
          }
        }
      }
    ]
  }
]
*/

PraefectusLudo.id = 'praefectus-ludo';

module.exports = PraefectusLudo;
