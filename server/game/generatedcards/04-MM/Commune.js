const Card = require('../../Card.js');

class Commune extends Card {
    //Omega. (After you play this card, end this step.)
    //Play: Lose all of your A. Gain 4A.
    setupCardAbilities(ability) {
        //Keywords: omega
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.loseAmber((context) => ({
                    all: true,
                    target: context.player
                })),
                ability.actions.gainAmber({ amount: 4 })
            ])
        });
    }
}

Commune.id = 'commune';

module.exports = Commune;
