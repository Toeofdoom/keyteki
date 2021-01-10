const Card = require('../../Card.js');

class MotherNorthelle extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: Move 1A from a friendly creature to your pool.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    amount: 1,
                    recipient: context.player
                }))
            }
        });
    }
}

MotherNorthelle.id = 'mother-northelle';

module.exports = MotherNorthelle;
