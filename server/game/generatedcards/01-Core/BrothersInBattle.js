const Card = require('../../Card.js');

class BrothersInBattle extends Card {
    //Play: Choose a house. For the remainder of the turn, each friendly creature of that house may fight.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'house'
            },
            gameAction: ability.actions.forRemainderOfTurn({
                match: (card, context) => card.type === 'creature' && card.hasHouse(context.house),
                effect: ability.effects.canFight()
            })
        });
    }
}

BrothersInBattle.id = 'brothers-in-battle';

module.exports = BrothersInBattle;
