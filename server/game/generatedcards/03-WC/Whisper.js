const Card = require('../../Card.js');

class Whisper extends Card {
    //Elusive.
    //Action: Lose 1A. If you do, destroy a creature.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.loseAmber({ amount: 1 }),
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
