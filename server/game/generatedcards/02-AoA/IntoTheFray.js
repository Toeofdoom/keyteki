const Card = require('../../Card.js');

class IntoTheFray extends Card {
    //Play: For the remainder of the turn, a friendly Brobnar creature gains, “Fight: Ready this creature.”
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect(() => ({
                effect: ability.effects.gainAbility('fight', {
                    gameAction: ability.actions.ready((context) => ({
                        target: context.source
                    }))
                })
            }))
        });
    }
}

IntoTheFray.id = 'into-the-fray';

module.exports = IntoTheFray;
