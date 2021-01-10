const Card = require('../../Card.js');

class KeyToDis extends Card {
    //Omni: Sacrifice $this. Destroy each creature.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sequential([
                ability.actions.sacrifice((context) => ({
                    target: context.source
                })),
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay
                }))
            ])
        });
    }
}

KeyToDis.id = 'key-to-dis';

module.exports = KeyToDis;
