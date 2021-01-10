const Card = require('../../Card.js');

class RegrettableMeteor extends Card {
    //Play: Destroy each Dinosaur creature and each creature with power 6 or higher.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: '',
                gameAction: ability.actions.destroy()
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
          "0": {
            "type": "creature",
            "conditions": [
              {
                "name": "trait",
                "trait": "dinosaur"
              }
            ],
            "mode": "all"
          },
          "2": "and",
          "3": [
            " "
          ],
          "4": {
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
                  "amount": 6
                }
              }
            ],
            "mode": "all"
          },
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

RegrettableMeteor.id = 'regrettable-meteor';

module.exports = RegrettableMeteor;
