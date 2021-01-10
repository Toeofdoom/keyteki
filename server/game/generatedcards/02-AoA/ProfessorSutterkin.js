const Card = require('../../Card.js');

class ProfessorSutterkin extends Card {
    //Reap: Draw a card for each friendly Logos creature.
    //
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.draw((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card.hasHouse('logos')
                    ).length
            }))
        });
    }
}

ProfessorSutterkin.id = 'professor-sutterkin';

module.exports = ProfessorSutterkin;
