const Card = require('../../Card.js');

class SaveThePack extends Card {
    //Play: Destroy each damaged creature. Gain 1 chain.
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => card.hasToken('damage'))
                })),
                ability.actions.gainChains({ amount: 1 })
            ]
        });
    }
}

SaveThePack.id = 'save-the-pack';

module.exports = SaveThePack;
