const Card = require('../../Card.js');

class PrescriptiveGrammarbot extends Card {
    //Taunt. Hazardous 3.
    //Reap: Enrage a creature.
    setupCardAbilities(ability) {
        //Keywords: taunt, hazardous 3
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.enrage()
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
        "name": "taunt"
      },
      {
        "name": "hazardous",
        "count": 3
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "enrage"
            }
          ]
        }
      ]
    }
  }
]
*/

PrescriptiveGrammarbot.id = 'prescriptive-grammarbot';

module.exports = PrescriptiveGrammarbot;
