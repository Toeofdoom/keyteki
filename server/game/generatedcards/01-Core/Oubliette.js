const Card = require('../../Card.js');

class Oubliette extends Card {
    //Play: Purge a creature with power 3 or lower.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.power <= 3,
                gameAction: ability.actions.purge()
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "conditions": [
            {
              "name": "comparison",
              "operator": "<=",
              "a": {
                "name": "power"
              },
              "b": {
                "name": "constant",
                "amount": 3
              }
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "purge"
            }
          ]
        }
      ]
    }
  }
]
*/

Oubliette.id = 'oubliette';

module.exports = Oubliette;
