describe('Special Delivery', function () {
    describe("Special Delivery's ability", function () {
        beforeEach(function () {
            this.setupTest({
                player1: {
                    house: 'sanctum',
                    inPlay: ['special-delivery', 'bad-penny']
                },
                player2: {
                    inPlay: ['troll', 'nexus']
                }
            });
        });

        it('should purge creatures who are destroyed by it', function () {
            this.player1.clickCard(this.specialDelivery);
            this.player1.clickPrompt("Use this card's Omni ability");
            this.player1.clickCard(this.nexus);
            expect(this.nexus.location).toBe('purged');
        });

        it('should not purge creatures who are not destroyed', function () {
            this.player1.clickCard(this.specialDelivery);
            this.player1.clickPrompt("Use this card's Omni ability");
            this.player1.clickCard(this.troll);
            expect(this.troll.location).toBe('play area');
            expect(this.troll.tokens.damage).toBe(3);
        });

        it('should not purge creatures that are no longer visible', function () {
            this.player1.clickCard(this.specialDelivery);
            this.player1.clickPrompt("Use this card's Omni ability");
            this.player1.clickCard(this.badPenny);
            expect(this.badPenny.location).toBe('hand');
        });
    });
});
