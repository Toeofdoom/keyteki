const Card = require('../../Card.js');

class PhylyxTheDisintegrator extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Action: Your opponent loses 1<A> for each other friendly Mars creature.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.loseAmber((context) => ({
                amount:
                    1 *
                    context.player.creaturesInPlay.filter(
                        (card) => card !== context.source && card.hasHouse('mars')
                    ).length
            }))
        });
    }
}

PhylyxTheDisintegrator.id = 'phylyx-the-disintegrator';

module.exports = PhylyxTheDisintegrator;
