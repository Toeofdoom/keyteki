const Card = require('../../Card.js');

class CurseOfVanity extends Card {
    //Play: Exalt a friendly creature and an enemy creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: '',
                gameAction: ability.actions.exalt()
            }
        });
    }
}

CurseOfVanity.id = 'curse-of-vanity';

module.exports = CurseOfVanity;
