const Card = require('../../Card.js');

class RaidingKnight extends Card {
    //Play: Capture 1<A>.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

RaidingKnight.id = 'raiding-knight';

module.exports = RaidingKnight;
