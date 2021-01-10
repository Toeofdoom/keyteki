const Card = require('../../Card.js');

class SongOfTheWild extends Card {
    //Play: For the remainder of the turn, each friendly creature gains, “Reap: Gain 1A.”
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                effect: ability.effects.gainAbility('reap', {
                    gameAction: ability.actions.gainAmber({ amount: 1 })
                })
            }))
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
            "name": "persistentEffect",
            "target": {
              "type": "creature",
              "controller": "self",
              "mode": "all"
            },
            "effects": [
              {
                "name": "gainAbility",
                "ability": {
                  "name": "bold",
                  "trigger": "reap",
                  "actions": {
                    "default": [
                      {
                        "name": "gainAmber",
                        "amount": 1
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
]
*/

SongOfTheWild.id = 'song-of-the-wild';

module.exports = SongOfTheWild;
