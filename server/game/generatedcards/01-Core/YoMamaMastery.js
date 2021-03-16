const Card = require('../../Card.js');

class YoMamaMastery extends Card {
    //This creature gains taunt.
    //Play: Fully heal this creature.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.addKeyword({
                taunt: 1
            })
        });
        this.play({
            gameAction: ability.actions.heal((context) => ({
                target: context.source.parent,
                fully: true
            }))
        });
    }
}

YoMamaMastery.id = 'yo-mama-mastery';

module.exports = YoMamaMastery;