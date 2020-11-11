const Card = require('../../Card.js');

class HitAndRun extends Card {
    setupCardAbilities(/*ability*/) {
        this.play({
            /*[
              {
                "name": "dealDamage",
                "amount": 2,
                "target": {
                  "type": "creature",
                  "controller": null,
                  "conditions": [],
                  "mode": "exactly",
                  "count": 1
                },
                "optional": false
              },
              {
                "name": "returnToHand",
                "target": {
                  "type": "creature",
                  "controller": "self",
                  "conditions": [],
                  "mode": "exactly",
                  "count": 1
                },
                "optional": false,
                "ifYouDo": false
              }
            ]*/
        });
    }
}

HitAndRun.id = 'hit-and-run';

module.exports = HitAndRun;
