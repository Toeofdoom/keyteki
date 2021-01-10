const Card = require('../../Card.js');

class LegionsMarch extends Card {
    //Play: For the remainder of the turn, after you use a Dinosaur creature, deal 1D to each non-Dinosaur creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onAbilityResolved: (event, context) =>
                        event.context.ability.isAction() &&
                        !event.context.ability.isCardPlayed() &&
                        event.context.player === context.player &&
                        event.context.source.type === 'creature' &&
                        event.context.source.hasTrait('dinosaur')
                },
                gameAction: ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => !card.hasTrait('dinosaur')
                    ),
                    amount: 1
                }))
            })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "forRemainderOfTurn",
          "durationEffect": {
            "name": "reaction",
            "trigger": {
              "trigger": "use",
              "card": {
                "type": "creature",
                "conditions": [
                  {
                    "name": "trait",
                    "trait": "dinosaur"
                  }
                ]
              },
              "eventPlayer": "self"
            },
            "actions": {
              "default": [
                {
                  "name": "dealDamage",
                  "amount": 1,
                  "target": {
                    "type": "creature",
                    "conditions": [
                      {
                        "name": "not",
                        "condition": {
                          "name": "trait",
                          "trait": "dinosaur"
                        }
                      }
                    ],
                    "mode": "all"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
]
*/

LegionsMarch.id = 'legion-s-march';

module.exports = LegionsMarch;
