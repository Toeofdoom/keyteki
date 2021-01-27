const Card = require('../../Card.js');

class Imperium extends Card {
    //Play: Ward 2 friendly creatures.
    setupCardAbilities(ability) {
        this.play({
            target: {
                numCards: '2',
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.ward()
            }
        });
    }
}

Imperium.id = 'imperium';

module.exports = Imperium;
