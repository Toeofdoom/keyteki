const Card = require('../../Card.js');

class DarkMinion extends Card {
    //Enhance D. (These icons have already been added to cards in your deck.)
    //Destroyed: Deal 1D to each enemy creature.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.destroyed({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.player.opponent.creaturesInPlay,
                amount: 1
            }))
        });
    }
}

DarkMinion.id = 'dark-minion';

module.exports = DarkMinion;
