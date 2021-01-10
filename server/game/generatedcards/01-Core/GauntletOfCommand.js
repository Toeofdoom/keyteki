const Card = require('../../Card.js');

class GauntletOfCommand extends Card {
    //Action: Ready and fight with a friendly creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
            }
        });
    }
}

GauntletOfCommand.id = 'gauntlet-of-command';

module.exports = GauntletOfCommand;
