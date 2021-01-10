const Card = require('../../Card.js');

class PsychicNetwork extends Card {
    //Play: Steal 1<A> for each friendly ready Mars creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.steal((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) =>
                            card.controller === context.player &&
                            !card.exhausted &&
                            card.hasHouse('mars')
                    ).length
            }))
        });
    }
}

PsychicNetwork.id = 'psychic-network';

module.exports = PsychicNetwork;
