const Card = require('../../Card.js');

class Whisper extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.action({
            gameAction: [ability.actions.loseAmber({ amount: 1 }), ability.actions.destroy()]
        });
    }
}

Whisper.id = 'whisper';

module.exports = Whisper;
