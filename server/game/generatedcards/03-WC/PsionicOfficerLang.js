const Card = require('../../Card.js');

class PsionicOfficerLang extends Card {
    //After an enemy creature reaps, archive the top card of your deck.
    //
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onReap: (event, context) =>
                    event.card.controller !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "reap",
      "card": {
        "type": "creature",
        "controller": "opponent"
      }
    },
    "actions": {
      "default": [
        {
          "name": "archive",
          "target": {
            "mode": "topdeck",
            "location": "hand",
            "controller": "self"
          }
        }
      ]
    }
  }
]
*/

PsionicOfficerLang.id = 'psionic-officer-lang';

module.exports = PsionicOfficerLang;
