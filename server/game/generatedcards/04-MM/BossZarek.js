const Card = require('../../Card.js');

class BossZarek extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"enhance","count":null}]
        this.persistentEffect({
            match: (card) => card.type == 'creature' && card.hasToken('amber'),
            effect: ability.effects.addKeyword({
                elusive: 1
            })
        });
    }
}

BossZarek.id = 'boss-zarek';

module.exports = BossZarek;
