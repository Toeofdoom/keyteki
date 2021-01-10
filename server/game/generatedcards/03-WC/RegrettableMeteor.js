const Card = require('../../Card.js');

class RegrettableMeteor extends Card {
    //Play: Destroy each Dinosaur creature and each creature with power 6 or higher.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: '',
                gameAction: ability.actions.destroy()
            }
        });
    }
}

RegrettableMeteor.id = 'regrettable-meteor';

module.exports = RegrettableMeteor;
