const Card = require('../../Card.js');

class CarpetPhloxem extends Card {
    //Play: If there are no friendly creatures in play, deal 4D to each creature.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) =>
                context.game.creaturesInPlay.filter((card) => card.controller === context.player)
                    .length === 0,
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay,
                amount: 4
            }))
        });
    }
}

CarpetPhloxem.id = 'carpet-phloxem';

module.exports = CarpetPhloxem;
