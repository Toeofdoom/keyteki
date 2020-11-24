const Card = require('../../Card.js');

class QuixoTheAdventurer extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Draw a card.
    //
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            gameAction: ability.actions.draw({ amount: 1 })
        });
    }
}

QuixoTheAdventurer.id = 'quixo-the-adventurer';

module.exports = QuixoTheAdventurer;
