const Card = require('../../Card.js');

class Ambertracker extends Card {
    //Play: Deal 2D to each enemy creature with A on it. This damage cannot be prevented by armor.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.player.opponent.creaturesInPlay.filter((card) =>
                    card.hasToken('amber')
                ),
                amount: 2,
                ignoreArmor: true
            }))
        });
    }
}

Ambertracker.id = 'æmbertracker';

module.exports = Ambertracker;
