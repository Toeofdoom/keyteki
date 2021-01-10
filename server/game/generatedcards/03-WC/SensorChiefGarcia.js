const Card = require('../../Card.js');

class SensorChiefGarcia extends Card {
    //Play/Fight/Reap: Keys cost +2A during your opponent’s next turn.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            gameAction: ability.actions.lastingEffect({
                targetController: 'any',
                effect: ability.effects.modifyKeyCost(2)
            })
        });
    }
}

SensorChiefGarcia.id = 'sensor-chief-garcia';

module.exports = SensorChiefGarcia;
