const Card = require('../../Card.js');

class Sinder extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //Reap: Destroy a friendly creature.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.reap({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.destroy()
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
          "controller": "self",
          "mode": "exactly",
          "count": 1,
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

Sinder.id = 'sinder';

module.exports = Sinder;
