const Card = require('../../Card.js');

class FaustTheGreat extends Card {
    //Your opponent’s keys cost +1A for each friendly creature with A on it.
    //Play: You may exalt a friendly creature.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            effect: ability.effects.modifyKeyCost(
                (player, context) =>
                    1 *
                    context.player.creaturesInPlay.filter((card) => card.hasToken('amber')).length
            )
        });
        this.play({
            target: {
                optional: true,
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.exalt({ amount: 1 })
            }
        });
    }
}

FaustTheGreat.id = 'faust-the-great';

module.exports = FaustTheGreat;
