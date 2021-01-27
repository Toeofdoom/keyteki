const Card = require('../../Card.js');

class MarsNeedsAmber extends Card {
    //Play: Each damaged enemy non-Mars creature captures 1A from their own side.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.player.opponent.creaturesInPlay.filter(
                    (card) => card.hasToken('damage') && !card.hasHouse('mars')
                ),
                amount: 1,
                player: context.player.opponent
            }))
        });
    }
}

MarsNeedsAmber.id = 'mars-needs-æmber';

module.exports = MarsNeedsAmber;
