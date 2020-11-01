const Card = require('../../Card.js');

class ChampionTabris extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.capture(1)
        });
    }
}

ChampionTabris.id = 'champion-tabris';

module.exports = ChampionTabris;
