const Card = require('../../Card.js');

class SeekerOfTruth extends Card {
    //Fight: You may fight with a friendly non-Sanctum creature.
    //
    setupCardAbilities(ability) {
        this.fight({
            target: {
                optional: true,
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => !card.hasHouse('sanctum'),
                gameAction: ability.actions.fight()
            }
        });
    }
}

SeekerOfTruth.id = 'seeker-of-truth';

module.exports = SeekerOfTruth;
