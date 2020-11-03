const Card = require('../../Card.js');

class SagittariisGaze extends Card {
    setupCardAbilities(ability) {
        //Keywords: Enhance D
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.exalt()
            }
        });
    }
}

SagittariisGaze.id = 'sagittarii-s-gaze';

module.exports = SagittariisGaze;
