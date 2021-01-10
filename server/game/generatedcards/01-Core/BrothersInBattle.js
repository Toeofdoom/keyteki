const Card = require('../../Card.js');

class BrothersInBattle extends Card {
    //Play: Choose a house. For the remainder of the turn, each friendly creature of that house may fight.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'house'
            },
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasHouse(context.house)
                ),
                effect: ability.effects.mayFight()
            }))
        });
    }
}

BrothersInBattle.id = 'brothers-in-battle';

module.exports = BrothersInBattle;
