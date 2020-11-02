const Card = require('../../Card.js');

class Anger extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
            }
        });
    }
}

Anger.id = 'anger';

module.exports = Anger;
