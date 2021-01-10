const Card = require('../../Card.js');

class ShardOfHate extends Card {
    //Action: Stun an enemy creature for each friendly Shard.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.stun()
            }
        });
    }
}

ShardOfHate.id = 'shard-of-hate';

module.exports = ShardOfHate;
