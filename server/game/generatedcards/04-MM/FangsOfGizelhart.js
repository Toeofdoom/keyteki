const Card = require('../../Card.js');

class FangsOfGizelhart extends Card {
    //Play: Purge the most powerful creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'mostStat',
                cardType: 'creature',
                cardStat: (card) => card.power,
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
          "mode": "mostStat",
          "count": 1,
          "cardStat": {
            "name": "power"
          },
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

FangsOfGizelhart.id = 'fangs-of-gizelhart';

module.exports = FangsOfGizelhart;
