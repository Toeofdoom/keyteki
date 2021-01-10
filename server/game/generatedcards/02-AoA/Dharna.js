const Card = require('../../Card.js');

class Dharna extends Card {
    //Play: Gain 1A for each damaged friendly creature.
    //Reap: Heal 2 damage from a friendly creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card.hasToken('damage')
                    ).length
            }))
        });
        this.reap({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.heal({ amount: 2 })
            }
        });
    }
}

Dharna.id = 'dharna';

module.exports = Dharna;
