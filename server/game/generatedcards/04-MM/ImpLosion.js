const Card = require('../../Card.js');

class ImpLosion extends Card {
    //Play: Destroy a friendly creature and an enemy creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: '',
                gameAction: ability.actions.destroy()
            }
        });
    }
}

ImpLosion.id = 'imp-losion';

module.exports = ImpLosion;
