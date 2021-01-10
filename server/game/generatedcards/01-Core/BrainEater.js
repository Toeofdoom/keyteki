const Card = require('../../Card.js');

class BrainEater extends Card {
    //After a creature is destroyed fighting $this, draw a card.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onDamageDealt: (event, context) =>
                    event.damageSource === context.source &&
                    event.destroyEvent &&
                    event.destroyEvent.resolved &&
                    event.card.type === 'creature'
            },
            gameAction: ability.actions.draw({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "destroyedFightingThis",
      "card": {
        "type": "creature"
      }
    },
    "actions": {
      "default": [
        {
          "name": "draw",
          "amount": 1
        }
      ]
    }
  }
]
*/

BrainEater.id = 'brain-eater';

module.exports = BrainEater;
