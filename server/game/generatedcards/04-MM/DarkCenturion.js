const Card = require('../../Card.js');

class DarkCenturion extends Card {
    //Enhance PTPT.
    //Action: Move 1A from a creature to the common supply. If you do, ward that creature.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.action({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.removeAmber({ amount: 1 })
            },
            then: (preThenContext) => ({
                gameAction: ability.actions.ward({ target: preThenContext.target })
            })
        });
    }
}

DarkCenturion.id = 'dark-centurion';

module.exports = DarkCenturion;
