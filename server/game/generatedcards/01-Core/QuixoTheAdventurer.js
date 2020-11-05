const Card = require('../../Card.js');

class QuixoTheAdventurer extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.fight({
            gameAction: ability.actions.draw({ amount: 1 })
        });
    }
}

QuixoTheAdventurer.id = 'quixo-the-adventurer';

module.exports = QuixoTheAdventurer;
