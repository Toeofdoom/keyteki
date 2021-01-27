const Card = require('../../Card.js');

class DinoBot extends Card {
    //Play: You may exalt $this. If you do, deal 3D to a creature.
    //Reap: Discard a card from your hand. If you do, draw a card.
    setupCardAbilities(ability) {
        this.play({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source,
                amount: 1
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                }
            }
        });
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.draw({ amount: 1 })
            }
        });
    }
}

DinoBot.id = 'dino-bot';

module.exports = DinoBot;
