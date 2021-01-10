const Card = require('../../Card.js');

class Archimedes extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Each of $this’s neighbors gains, “Destroyed: Archive this creature.”
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.archive((context) => ({
                    target: context.source,
                    location: 'hand'
                }))
            })
        });
    }
}

Archimedes.id = 'archimedes';

module.exports = Archimedes;
