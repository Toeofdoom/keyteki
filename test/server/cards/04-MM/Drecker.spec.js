describe('Drecker', function () {
    describe("Drecker's ability", function () {
        beforeEach(function () {
            this.setupTest({
                player1: {
                    house: 'untamed',
                    inPlay: ['snufflegator', 'dust-pixie']
                },
                player2: {
                    inPlay: ['drecker', 'shadow-self'],
                    hand: ['drecker']
                }
            });
            this.drecker1 = this.player2.findCardByName('drecker', 'play area');
            this.drecker2 = this.player2.findCardByName('drecker', 'hand');
        });

        //This interpretation was chosen because shadow self doesn't create abilities with fight events or in other words "the engine said so."
        //Also, shadow self is not in mass mutation.
        it('should amplify damage to neighboring shadow self', function () {
            this.player1.fightWith(this.dustPixie, this.shadowSelf);
            expect(this.drecker1.hasToken('damage')).toBe(false);
            expect(this.shadowSelf.tokens.damage).toBe(2);
            expect(this.drecker1.location).toBe('play area');
            expect(this.player1).toHavePrompt('Play phase');
        });

        it('should transfer damage to neighboring shadow self without modification', function () {
            this.player1.fightWith(this.dustPixie, this.drecker);
            expect(this.drecker1.hasToken('damage')).toBe(false);
            expect(this.shadowSelf.tokens.damage).toBe(1);
            expect(this.drecker1.location).toBe('play area');
            expect(this.player1).toHavePrompt('Play phase');
        });

        it('should not loop with a neighbor', function () {
            this.player1.endTurn();
            this.player2.clickPrompt('Dis');
            this.player2.moveCard(this.shadowSelf, 'discard');
            this.player2.play(this.drecker2);
            this.player2.endTurn();
            this.player1.clickPrompt('Untamed');

            this.player1.fightWith(this.dustPixie, this.drecker1);
            expect(this.drecker1.location).toBe('play area');
            expect(this.drecker2.location).toBe('play area');
            expect(this.drecker1.tokens.damage).toBe(1);
            expect(this.drecker2.tokens.damage).toBe(1);
            expect(this.player1).toHavePrompt('Play phase');
        });
    });
});
