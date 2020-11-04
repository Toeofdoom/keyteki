const Card = require('../../Card.js');

class DinosaursBane extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('dinosaur'),
                gameAction: ability.actions.destroy()
            }
        });
        /*[]*/
    }
}

DinosaursBane.id = 'dinosaurs--bane';

module.exports = DinosaursBane;
