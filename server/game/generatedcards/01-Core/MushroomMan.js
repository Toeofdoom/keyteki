const Card = require('../../Card.js');

class MushroomMan extends Card {
    //$this gets +3 power for each unforged key you have.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyPower(3)
        });
    }
}

MushroomMan.id = 'mushroom-man';

module.exports = MushroomMan;
