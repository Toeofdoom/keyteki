const Card = require('../../Card.js');

class CaptainNoBeardEvilTwin extends Card {
    //Taunt.
    //Destroyed: Each of $this's neighbors captures 1A.
    //This card is incomplete and subject to change.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.destroyed({
            gameAction: ability.actions.capture((context) => ({
                target: context.game.creaturesInPlay.filter((card) =>
                    context.source.neighbors.includes(card)
                ),
                amount: 1
            }))
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card is incomplete and subject to change."
          ]
        }*/
    }
}

CaptainNoBeardEvilTwin.id = 'captain-no-beard-evil-twin';

module.exports = CaptainNoBeardEvilTwin;