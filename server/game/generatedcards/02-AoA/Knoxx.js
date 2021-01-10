const Card = require('../../Card.js');

class Knoxx extends Card {
    //$this gets +3 power for each neighbor it has.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyPower(3)
        });
    }
}

Knoxx.id = 'knoxx';

module.exports = Knoxx;
