const Card = require('../../Card.js');

class TheEvilEye extends Card {
    //Play: Keys cost +3A during your opponent’s next turn.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.lastingEffect({
                targetController: 'any',
                effect: ability.effects.modifyKeyCost(() => 3)
            })
        });
    }
}

TheEvilEye.id = 'the-evil-eye';

module.exports = TheEvilEye;
