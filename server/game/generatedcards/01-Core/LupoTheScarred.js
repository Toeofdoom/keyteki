const Card = require('../../Card.js');

class LupoTheScarred extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.play({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            }
        });
    }
}

LupoTheScarred.id = 'lupo-the-scarred';

module.exports = LupoTheScarred;
