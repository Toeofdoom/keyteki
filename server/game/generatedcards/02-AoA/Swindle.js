const Card = require('../../Card.js');

class Swindle extends Card {
    setupCardAbilities(ability) {
        //Keywords: Alpha
        //Keywords: Omega
        this.play({
            gameAction: ability.actions.steal(3)
        });
    }
}

Swindle.id = 'swindle';

module.exports = Swindle;
