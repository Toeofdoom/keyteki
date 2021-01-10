const Card = require('../../Card.js');

class Wardrummer extends Card {
    //Play: Return each other friendly Brobnar creature to your hand.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) =>
                        card.controller === context.player &&
                        card !== context.source &&
                        card.hasHouse('brobnar')
                )
            }))
        });
    }
}

Wardrummer.id = 'wardrummer';

module.exports = Wardrummer;
