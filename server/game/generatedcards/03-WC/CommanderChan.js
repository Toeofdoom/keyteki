const Card = require('../../Card.js');

class CommanderChan extends Card {
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card, context) =>
                    card.exhausted === false && card !== context.source,
                gameAction: ability.actions.use()
            }
        });
    }
}

CommanderChan.id = 'commander-chan';

module.exports = CommanderChan;
