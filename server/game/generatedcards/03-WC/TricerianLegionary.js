const Card = require('../../Card.js');

class TricerianLegionary extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"taunt","count":null}]
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.ward()
            }
        });
    }
}

TricerianLegionary.id = 'tricerian-legionary';

module.exports = TricerianLegionary;
