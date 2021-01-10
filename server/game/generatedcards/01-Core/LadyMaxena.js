const Card = require('../../Card.js');

class LadyMaxena extends Card {
    //Play: Stun a creature.
    //Action: Return $this to its owner’s hand.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.stun()
            }
        });
        this.action({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.source
            }))
        });
    }
}

LadyMaxena.id = 'lady-maxena';

module.exports = LadyMaxena;
