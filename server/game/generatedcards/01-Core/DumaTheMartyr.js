const Card = require('../../Card.js');

class DumaTheMartyr extends Card {
    //Destroyed: Fully heal each other friendly creature and draw 2 cards.
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.sequential([
                ability.actions.heal((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card !== context.source
                    ),
                    fully: true
                })),
                ability.actions.draw({ amount: 2 })
            ])
        });
    }
}

DumaTheMartyr.id = 'duma-the-martyr';

module.exports = DumaTheMartyr;
