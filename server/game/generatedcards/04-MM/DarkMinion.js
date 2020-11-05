const Card = require('../../Card.js');

class DarkMinion extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"enhance","count":null}]
        this.destroyed({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player
                ),
                amount: 1
            }))
        });
    }
}

DarkMinion.id = 'dark-minion';

module.exports = DarkMinion;
