const Card = require('../../Card.js');

class AxiomOfGrisk extends Card {
    //Play: Ward a creature. Destroy each creature with no A on it. Gain 2 chains.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.ward()
            },
            gameAction: [
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => !card.hasToken('amber'))
                })),
                ability.actions.gainChains({ amount: 2 })
            ]
        });
    }
}

AxiomOfGrisk.id = 'axiom-of-grisk';

module.exports = AxiomOfGrisk;
