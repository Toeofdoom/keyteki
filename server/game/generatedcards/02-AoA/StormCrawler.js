const Card = require('../../Card.js');

class StormCrawler extends Card {
    //$this only deals 1D when fighting.
    //After an enemy creature reaps, stun it.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.limitFightDamage({ amount: 1 })
        });
        this.reaction({
            when: {
                onReap: (event, context) =>
                    event.card.controller !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.stun((context) => ({
                target: context.event.card
            }))
        });
    }
}

StormCrawler.id = 'storm-crawler';

module.exports = StormCrawler;
