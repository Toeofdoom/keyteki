const Card = require('../../Card.js');

class GrabberJammer extends Card {
    //Your opponent’s keys cost +1<A>.
    //Fight/Reap: Capture 1<A>.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            effect: ability.effects.modifyKeyCost(1)
        });
        this.fight({
            reap: true,
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

GrabberJammer.id = 'grabber-jammer';

module.exports = GrabberJammer;
