const Card = require('../../Card.js');

class Mug extends Card {
    //Play: Move 1A from a creature to your pool. Deal 2D to that creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.sequential([
                    ability.actions.returnAmber((context) => ({
                        amount: 1,
                        recipient: context.player
                    })),
                    ability.actions.dealDamage({ amount: 2 })
                ])
            }
        });
    }
}

Mug.id = 'mug';

module.exports = Mug;
