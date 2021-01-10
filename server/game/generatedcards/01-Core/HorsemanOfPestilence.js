const Card = require('../../Card.js');

class HorsemanOfPestilence extends Card {
    //Play/Fight/Reap: Deal 1<D> to each non-Horseman creature.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('horseman')),
                amount: 1
            }))
        });
    }
}

HorsemanOfPestilence.id = 'horseman-of-pestilence';

module.exports = HorsemanOfPestilence;
