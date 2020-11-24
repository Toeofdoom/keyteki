const Card = require('../../Card.js');

class BordanTheRedeemed extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.capture({ amount: 2 })
        });
    }
}

BordanTheRedeemed.id = 'bordan-the-redeemed';

module.exports = BordanTheRedeemed;
