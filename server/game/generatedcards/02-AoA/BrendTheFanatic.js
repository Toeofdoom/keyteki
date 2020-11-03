const Card = require('../../Card.js');

class BrendTheFanatic extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                target: context.player.opponent,
                amount: 1
            }))
        });
        this.destroyed({
            gameAction: ability.actions.steal(3)
        });
    }
}

BrendTheFanatic.id = 'brend-the-fanatic';

module.exports = BrendTheFanatic;
