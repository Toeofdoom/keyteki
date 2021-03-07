const Card = require('../../Card.js');

class BarnRazing extends Card {
    //Play: For the remainder of the turn, your opponent loses 1A each time a friendly creature fights.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onUseCard: (event, context) =>
                        event.fightEvent &&
                        event.fightEvent.attackerClone.controller === context.player &&
                        event.fightEvent.attackerClone.type === 'creature'
                },
                gameAction: ability.actions.loseAmber({ amount: 1 })
            })
        });
    }
}

BarnRazing.id = 'barn-razing';

module.exports = BarnRazing;
