const Card = require('../../Card.js');

class FirstOfficerFrane extends Card {
    //Play/Fight/Reap: A friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture((context) => ({
                    amount: 1,
                    player: context.target.controller.opponent
                }))
            }
        });
    }
}

FirstOfficerFrane.id = 'first-officer-frane';

module.exports = FirstOfficerFrane;
