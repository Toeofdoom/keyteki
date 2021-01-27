const Card = require('../../Card.js');

class Bumblebird extends Card {
    //Alpha. (You can only play this card before doing anything else this step.)
    //Play: Put two +1 power counters on each other friendly Untamed creature.
    setupCardAbilities(ability) {
        //Keywords: alpha
        this.play({
            gameAction: ability.actions.addPowerCounter((context) => ({
                target: context.player.creaturesInPlay.filter(
                    (card) => card !== context.source && card.hasHouse('untamed')
                ),
                amount: 2
            }))
        });
    }
}

Bumblebird.id = 'bumblebird';

module.exports = Bumblebird;
