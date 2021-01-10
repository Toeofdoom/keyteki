const Card = require('../../Card.js');

class Floomf extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Give a Beast creature two +1 power counters.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('beast'),
                gameAction: ability.actions.addPowerCounter({ amount: 2 })
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
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "targets": [
        {
          "type": "creature",
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
              "name": "addPowerCounter",
              "amount": 2
            }
          ]
        }
      ]
    }
  }
]
*/

Floomf.id = 'floomf';

module.exports = Floomf;
