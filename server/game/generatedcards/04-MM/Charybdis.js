const Card = require('../../Card.js');

class Charybdis extends Card {
    //Each enemy creatures gains, “Before Fight: Lose 1A.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            match: (card) => card.type === 'creature',
            effect: ability.effects.gainAbility('beforeFight', {
                gameAction: ability.actions.loseAmber({ amount: 1 })
            })
        });
    }
}

Charybdis.id = 'charybdis';

module.exports = Charybdis;
