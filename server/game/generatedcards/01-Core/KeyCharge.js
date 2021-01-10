const Card = require('../../Card.js');

class KeyCharge extends Card {
    //Play: Lose 1A. If you do, you may forge a key at current cost.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 1,
                target: context.player
            })),
            then: {
                may: 'Do something',
                gameAction: ability.actions.forgeKey()
            }
        });
    }
}

KeyCharge.id = 'key-charge';

module.exports = KeyCharge;
