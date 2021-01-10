const Card = require('../../Card.js');

class HorsemanOfDeath extends Card {
    //Play: Return each Horseman creature from your discard pile to your hand.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.player.discard.filter(
                    (card) =>
                        card.controller === context.player &&
                        card.type === 'creature' &&
                        card.hasTrait('horseman')
                ),
                location: 'discard'
            }))
        });
    }
}

HorsemanOfDeath.id = 'horseman-of-death';

module.exports = HorsemanOfDeath;
