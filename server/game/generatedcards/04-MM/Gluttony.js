const Card = require('../../Card.js');

class Gluttony extends Card {
    //Play: Exalt $this once for each friendly Sin creature.
    //Reap: Move each A from friendly creatures to your pool.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            }))
        });
        this.reap({
            target: {
                mode: '',
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    all: true,
                    recipient: context.player
                }))
            }
        });
    }
}

Gluttony.id = 'gluttony';

module.exports = Gluttony;
