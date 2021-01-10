const Card = require('../../Card.js');

class HeistNight extends Card {
    //Alpha. (You can only play this card before doing anything else this step.)
    //Play: Steal 1A for each friendly Thief creature.
    setupCardAbilities(ability) {
        //Keywords: alpha
        this.play({
            gameAction: ability.actions.steal((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card.hasTrait('thief')
                    ).length
            }))
        });
    }
}

HeistNight.id = 'heist-night';

module.exports = HeistNight;
