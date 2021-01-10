const Card = require('../../Card.js');

class Envy extends Card {
    //Elusive.
    //Reap: If there are 2 or more friendly Sin creatures, capture all of your opponent’s A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            condition: (context) =>
                context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('sin')
                ).length === 2,
            gameAction: ability.actions.capture({ all: true })
        });
    }
}

Envy.id = 'envy';

module.exports = Envy;
