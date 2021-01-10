const Card = require('../../Card.js');

class Ambertracker extends Card {
    //Play: Deal 2D to each enemy creature with A on it. This damage cannot be prevented by armor.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player && card.hasToken('amber')
                ),
                amount: 2
            }))
        });
    }
}

Ambertracker.id = 'æmbertracker';

module.exports = Ambertracker;
