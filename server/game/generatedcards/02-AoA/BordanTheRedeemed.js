const Card = require('../../Card.js');

class BordanTheRedeemed extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.action({
            gameAction: ability.actions.capture(2)
        });
    }
}

BordanTheRedeemed.id = 'bordan-the-redeemed';

module.exports = BordanTheRedeemed;
