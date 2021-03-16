const Card = require('../../Card.js');

class BeastFighterUrsoEvilTwin extends Card {
    //Play/Fight: Stun a creature.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            target: {
                cardType: 'creature',
                gameAction: ability.actions.stun()
            }
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

BeastFighterUrsoEvilTwin.id = 'beast-fighter-urso-evil-twin';

module.exports = BeastFighterUrsoEvilTwin;
