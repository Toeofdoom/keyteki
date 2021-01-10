const Card = require('../../Card.js');

class FaustTheGreat extends Card {
    //Your opponent’s keys cost +1A for each friendly creature with A on it.
    //Play: You may exalt a friendly creature.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            effect: ability.effects.modifyKeyCost(1)
        });
        this.play({
            target: {
                optional: true,
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.exalt()
            }
        });
    }
}

FaustTheGreat.id = 'faust-the-great';

module.exports = FaustTheGreat;
