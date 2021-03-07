const Card = require('../../Card.js');

class SelwynTheFence extends Card {
    //Fight/Reap: Move 1A from one of your cards to your pool.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    amount: 1,
                    recipient: context.player
                }))
            }
        });
    }
}

SelwynTheFence.id = 'selwyn-the-fence';

module.exports = SelwynTheFence;
