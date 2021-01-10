const Card = require('../../Card.js');

class HorsemanOfFamine extends Card {
    //Play/Fight/Reap: Destroy the least powerful creature.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            target: {
                mode: 'mostStat',
                cardType: 'creature',
                cardStat: (card) => -card.power,
                gameAction: ability.actions.destroy()
            }
        });
    }
}

HorsemanOfFamine.id = 'horseman-of-famine';

module.exports = HorsemanOfFamine;
