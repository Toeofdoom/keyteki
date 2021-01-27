const Card = require('../../Card.js');

class SeraphicArmor extends Card {
    //This creature gets +1 armor.
    //Play: Fully heal this creature.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.modifyArmor(() => 1)
        });
        this.play({
            gameAction: ability.actions.heal((context) => ({
                target: context.source.parent,
                fully: true
            }))
        });
    }
}

SeraphicArmor.id = 'seraphic-armor';

module.exports = SeraphicArmor;
