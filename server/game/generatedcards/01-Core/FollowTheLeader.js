const Card = require('../../Card.js');

class FollowTheLeader extends Card {
    //Play: For the remainder of the turn, each friendly creature may fight.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                effect: ability.effects.mayFight()
            }))
        });
    }
}

FollowTheLeader.id = 'follow-the-leader';

module.exports = FollowTheLeader;
