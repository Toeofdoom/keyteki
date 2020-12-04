const Card = require('../../Card.js');

class SongOfTheWild extends Card {
    //Play: For the remainder of the turn, each friendly creature gains, “Reap: Gain 1A.”
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                effect: ability.effects.gainAbility('reap', {
                    gameAction: ability.actions.gainAmber({ amount: 1 })
                }) /*{"this":"context.source","it":"context.target","check":"card","thenDepth":1,"thenContext":"preThenContext"}*/
            }))
        });
    }
}

SongOfTheWild.id = 'song-of-the-wild';

module.exports = SongOfTheWild;
