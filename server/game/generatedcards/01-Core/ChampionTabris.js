const Card = require('../../Card.js');

class ChampionTabris extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

ChampionTabris.id = 'champion-tabris';

module.exports = ChampionTabris;
