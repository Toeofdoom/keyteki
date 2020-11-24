const Card = require('../../Card.js');

class UlyqMegamouth extends Card {
    //Fight/Reap: Use a friendly non-Mars creature.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => card.exhausted === false && !card.hasHouse('mars'),
                gameAction: ability.actions.use()
            }
        });
    }
}

UlyqMegamouth.id = 'ulyq-megamouth';

module.exports = UlyqMegamouth;
