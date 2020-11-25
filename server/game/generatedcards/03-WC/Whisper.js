const Card = require('../../Card.js');

class Whisper extends Card {
    //Elusive.
    //Action: Lose 1A. If you do, destroy a creature.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 1,
                target: context.player
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.destroy()
                }
            }
        });
    }
}

Whisper.id = 'whisper';

module.exports = Whisper;
