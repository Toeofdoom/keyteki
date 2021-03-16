const Card = require('../../Card.js');

class CensorPhiloEvilTwin extends Card {
    //Play: Deal 5D to a creature with A on it.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('amber'),
                gameAction: ability.actions.dealDamage({ amount: 5 })
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

CensorPhiloEvilTwin.id = 'censor-philo-evil-twin';

module.exports = CensorPhiloEvilTwin;
