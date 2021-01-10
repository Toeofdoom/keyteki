const Card = require('../../Card.js');

class ProfessorTerato extends Card {
    //Each Mutant creature gains, “Reap: Draw a card.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature' && card.hasTrait('mutant'),
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.draw({ amount: 1 })
            })
        });
    }
}

ProfessorTerato.id = 'professor-terato';

module.exports = ProfessorTerato;
