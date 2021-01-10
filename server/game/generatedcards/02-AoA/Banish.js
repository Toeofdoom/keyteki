const Card = require('../../Card.js');

class Banish extends Card {
    //Play: Put an enemy creature into your opponent’s archives.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.archive()
            }
        });
    }
}

Banish.id = 'banish';

module.exports = Banish;
