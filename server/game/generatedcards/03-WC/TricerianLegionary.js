const Card = require('../../Card.js');

class TricerianLegionary extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //Play: Ward a friendly creature.
    setupCardAbilities(ability) {
        //Keywords: taunt
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
