const Card = require('../../Card.js');

class BrendTheFanatic extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
                target: context.player.opponent
            }))
        });
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 3 })
        });
    }
}

BrendTheFanatic.id = 'brend-the-fanatic';

module.exports = BrendTheFanatic;
