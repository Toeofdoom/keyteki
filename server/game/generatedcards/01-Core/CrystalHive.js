const Card = require('../../Card.js');

class CrystalHive extends Card {
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onReap: (event) => event.card.type === 'creature'
                },
                gameAction: ability.actions.gainAmber({ amount: 1 })
            })
        });
    }
}

CrystalHive.id = 'crystal-hive';

module.exports = CrystalHive;
