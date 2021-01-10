const Card = require('../../Card.js');

class Shorty extends Card {
    //Assault 4. (Before this creature attacks, deal 4D to the attacked enemy.)
    //Reap: Enrage $this.
    setupCardAbilities(ability) {
        //Keywords: assault 4
        this.reap({
            gameAction: ability.actions.enrage((context) => ({
                target: context.source
            }))
        });
    }
}

Shorty.id = 'shorty';

module.exports = Shorty;
