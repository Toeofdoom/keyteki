const Card = require('../../Card.js');

class AlmsmasterEvilTwin extends Card {
    //Deploy.
    //Each of $this's neighbors gains, "Destroyed: Steal 1A."
    //This card has been translated from Polish and is subject to change.
    setupCardAbilities(ability) {
        //Keywords: deploy
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.steal({ amount: 1 })
            })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Polish and is subject to change."
          ]
        }*/
    }
}

AlmsmasterEvilTwin.id = 'almsmaster-evil-twin';

module.exports = AlmsmasterEvilTwin;
