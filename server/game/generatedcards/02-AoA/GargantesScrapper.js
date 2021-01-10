const Card = require('../../Card.js');

class GargantesScrapper extends Card {
    //Alpha. (You can only play this card before doing anything else this step.)
    //Play: If you have 3A or more, deal 3D to an enemy creature.
    setupCardAbilities(ability) {
        //Keywords: alpha
        this.play({
            condition: (context) => context.player.amber >= 3,
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.dealDamage({ amount: 3 })
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
        "name": "alpha"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "opponent",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
              "amount": 3,
              "condition": {
                "name": "comparison",
                "operator": ">=",
                "a": {
                  "name": "amber",
                  "player": "self"
                },
                "b": {
                  "name": "constant",
                  "amount": 3
                }
              }
            }
          ]
        }
      ],
      "condition": {
        "name": "comparison",
        "operator": ">=",
        "a": {
          "name": "amber",
          "player": "self"
        },
        "b": {
          "name": "constant",
          "amount": 3
        }
      }
    }
  }
]
*/

GargantesScrapper.id = 'gargantes-scrapper';

module.exports = GargantesScrapper;
