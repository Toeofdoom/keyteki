const Card = require('../../Card.js');

class LiamSay extends Card {
    //Elusive.
    //At the start of your turn, you may deal 1D to a creature.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reaction({
            when: {
                onBeginRound: (event, context) => context.player === this.game.activePlayer
            },
            target: {
                optional: true,
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            }
        });
    }
}

LiamSay.id = 'liam-say';

module.exports = LiamSay;
