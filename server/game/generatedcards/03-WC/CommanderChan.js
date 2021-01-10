const Card = require('../../Card.js');

class CommanderChan extends Card {
    //Fight/Reap: Use another friendly creature.
    //
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card, context) => card !== context.source,
                gameAction: ability.actions.use()
            }
        });
    }
}

CommanderChan.id = 'commander-chan';

module.exports = CommanderChan;
