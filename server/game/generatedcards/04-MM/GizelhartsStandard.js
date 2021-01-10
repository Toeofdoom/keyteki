const Card = require('../../Card.js');

class GizelhartsStandard extends Card {
    //Each friendly creature with A on it gets +1 armor.
    //Play: Exalt a friendly creature.
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.hasToken('amber'),
            effect: ability.effects.modifyArmor(1)
        });
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.exalt()
            }
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
          "name": "hasAmber"
        }
      ],
      "mode": "all"
    },
    "effects": [
      {
        "name": "modifyArmor",
        "amount": 1
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
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "exalt"
            }
          ]
        }
      ]
    }
  }
]
*/

GizelhartsStandard.id = 'gizelhart-s-standard';

module.exports = GizelhartsStandard;
