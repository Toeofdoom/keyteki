const Card = require('../../Card.js');

class OperationsOfficerYshi extends Card {
    //Taunt.
    //Each of $this’s neighbors gains, “Fight/Reap: Capture 1A.”
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                gameAction: ability.actions.capture({ amount: 1 })
            })
        });
    }
}

OperationsOfficerYshi.id = 'operations-officer-yshi';

module.exports = OperationsOfficerYshi;
