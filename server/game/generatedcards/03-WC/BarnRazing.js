const Card = require('../../Card.js');

class BarnRazing extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onFight: (event, context) =>
                        event.card.controller === context.player && event.card.type === 'creature'
                },
                gameAction: ability.actions.loseAmber({ amount: 1 })
            })
        });
    }
}

BarnRazing.id = 'barn-razing';

module.exports = BarnRazing;
