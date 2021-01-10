const Card = require('../../Card.js');

class SicSemperTyrannosaurus extends Card {
    //Play: Move each A from the most powerful creature to your pool and destroy that creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'mostStat',
                cardType: 'creature',
                cardStat: (card) => card.power,
                gameAction: ability.actions.sequential([
                    ability.actions.returnAmber((context) => ({
                        all: true,
                        recipient: context.player
                    })),
                    ability.actions.destroy()
                ])
            }
        });
    }
}

SicSemperTyrannosaurus.id = 'sic-semper-tyrannosaurus';

module.exports = SicSemperTyrannosaurus;
