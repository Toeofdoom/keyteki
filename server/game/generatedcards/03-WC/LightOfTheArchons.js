const Card = require('../../Card.js');

class LightOfTheArchons extends Card {
    //This creature gets +1 power and +1 armor for each upgrade attached to it.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.modifyPower(
                    (card, context) =>
                        1 *
                        context.game.creaturesInPlay
                            .flatMap((card) => card.upgrades || [])
                            .filter((card) => this.parent.upgrades.includes(card)).length
                ),
                ability.effects.modifyArmor(
                    (card, context) =>
                        1 *
                        context.game.creaturesInPlay
                            .flatMap((card) => card.upgrades || [])
                            .filter((card) => this.parent.upgrades.includes(card)).length
                )
            ]
        });
    }
}

LightOfTheArchons.id = 'light-of-the-archons';

module.exports = LightOfTheArchons;
