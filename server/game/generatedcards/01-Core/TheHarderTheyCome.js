const Card = require('../../Card.js');

class TheHarderTheyCome extends Card {
    //Play: Purge a creature with power 5 or higher.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.power >= 5,
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
              "operator": ">=",
              "a": {
                "name": "power"
              },
              "b": {
                "name": "constant",
                "amount": 5
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

TheHarderTheyCome.id = 'the-harder-they-come';

module.exports = TheHarderTheyCome;
