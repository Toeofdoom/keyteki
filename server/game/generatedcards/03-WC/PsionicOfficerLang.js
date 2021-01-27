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
            gameAction: ability.actions.archive((context) => ({
                target: context.player.deck.slice(0, Math.min(context.player.deck.length, 1)),
                location: 'deck'
            }))
        });
    }
}

PsionicOfficerLang.id = 'psionic-officer-lang';

module.exports = PsionicOfficerLang;
