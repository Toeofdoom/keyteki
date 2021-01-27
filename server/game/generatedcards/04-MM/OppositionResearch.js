const Card = require('../../Card.js');

class OppositionResearch extends Card {
    //Enhance D. (These icons have already been added to cards in your deck.)
    //Play:  Enemy creatures cannot reap during your opponent’s next turn.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.play({
            gameAction: ability.actions.lastingEffect({
                targetController: 'opponent',
                match: (card) => card.type === 'creature',
                effect: ability.effects.cardCannot('reap')
            })
        });
    }
}

OppositionResearch.id = 'opposition-research';

module.exports = OppositionResearch;
