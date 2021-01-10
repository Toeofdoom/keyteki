const Card = require('../../Card.js');

class Firespitter extends Card {
    //Before Fight: Deal 1<D> to each enemy creature.
    setupCardAbilities(ability) {
        this.beforeFight({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player
                ),
                amount: 1
            }))
        });
    }
}

Firespitter.id = 'firespitter';

module.exports = Firespitter;
