const Card = require('../../Card.js');

class SongOfTheWild extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                effect: ability.effects.gainAbility('reap', {
                    gameAction: ability.actions.gainAmber({ amount: 1 })
                })
            }))
        });
    }
}

SongOfTheWild.id = 'song-of-the-wild';

module.exports = SongOfTheWild;
