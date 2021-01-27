const Card = require('../../Card.js');

class Deusillus extends Card {
    //(Play only with the other half of $this.)
    //Play: Capture all of your opponent’s A. Deal 5D to an enemy creature.
    //Fight/Reap: Move 1A from $this to the common supply. Deal 2D to each enemy creature.
    setupCardAbilities(ability) {
        /*{
          "name": "reminderText",
          "keywords": [
            "(Play only with the other half of $this.)"
          ]
        }*/
        this.play({
            gameAction: ability.actions.capture({ all: true }),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    controller: 'opponent',
                    gameAction: ability.actions.dealDamage({ amount: 5 })
                }
            }
        });
        this.fight({
            reap: true,
            gameAction: ability.actions.sequential([
                ability.actions.removeAmber((context) => ({
                    target: context.source,
                    amount: 1
                })),
                ability.actions.dealDamage((context) => ({
                    target: context.player.opponent.creaturesInPlay,
                    amount: 2
                }))
            ])
        });
    }
}

Deusillus.id = 'deusillus2';

module.exports = Deusillus;
