const Card = require('../../Card.js');

class UniversalTranslator extends Card {
    //This creature gains, “Fight/Reap: Use a friendly non-Star Alliance creature.”
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    cardCondition: (card) => !card.hasHouse('staralliance'),
                    gameAction: ability.actions.use()
                }
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
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "fight",
          "extraTriggers": [
            "reap"
          ],
          "actions": {
            "targets": [
              {
                "type": "creature",
                "controller": "self",
                "conditions": [
                  {
                    "name": "not",
                    "condition": {
                      "name": "house",
                      "house": "staralliance"
                    }
                  }
                ],
                "mode": "exactly",
                "count": 1,
                "actions": [
                  {
                    "name": "use"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  }
]
*/

UniversalTranslator.id = 'universal-translator';

module.exports = UniversalTranslator;
