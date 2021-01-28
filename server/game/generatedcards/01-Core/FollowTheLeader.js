const Card = require('../../Card.js');

class FollowTheLeader extends Card {
    //Play: For the remainder of the turn, each friendly creature may fight.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                match: (card) => card.type === 'creature',
                effect: ability.effects.canFight()
            })
        });
    }
}

FollowTheLeader.id = 'follow-the-leader';

module.exports = FollowTheLeader;
