const Card = require('../../Card.js');

class EyeOfJudgment extends Card {
    //Action: Purge a creature from a discard pile.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'any',
                location: 'discard',
                gameAction: ability.actions.purge({ location: 'discard' })
            }
        });
    }
}

EyeOfJudgment.id = 'eye-of-judgment';

module.exports = EyeOfJudgment;
