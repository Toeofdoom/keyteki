const Card = require('../../Card.js');

class Flaxia extends Card {
    //Play: Gain 2A if you control more creatures than your opponent.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) =>
                context.player.creaturesInPlay.length >
                context.player.opponent.creaturesInPlay.length,
            gameAction: ability.actions.gainAmber({ amount: 2 })
        });
    }
}

Flaxia.id = 'flaxia';

module.exports = Flaxia;
