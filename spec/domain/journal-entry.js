
require('./helper');


describe('JournalEntry', function () {

    describe('getDebitAmount', function () {

        it('returns the amount of debit if it is debit entry', function () {

            var entry = new JournalEntry(null, 'debit', null, new Money(500), null, null);

            expect(entry.getDebitAmount()).to.be.instanceof(Money);
            expect(entry.getDebitAmount().amount).to.equal(500);

        });

        it('returns null if it is credit entry', function () {

            var entry = new JournalEntry(null, 'credit', null, new Money(500), null, null);

            expect(entry.getDebitAmount()).to.be.null;

        });

    });

    describe('getCreditAmount', function () {

        it('returns the amount of credit if it is credit entry', function () {

            var entry = new JournalEntry(null, 'credit', null, new Money(500), null, null);

            expect(entry.getCreditAmount()).to.be.instanceof(Money);
            expect(entry.getCreditAmount().amount).to.equal(500);

        });

        it('returns null if it is debit entry', function () {

            var entry = new JournalEntry(null, 'debit', null, new Money(500), null, null);

            expect(entry.getCreditAmount()).to.be.null;

        });

    });


    describe('getCorrespondingTitles', function () {

        it('gets the titles of corresponding debit/credit entries', function () {


            var d0 = new JournalEntry(null, 'debit', 'A', new Money(1));
            var d1 = new JournalEntry(null, 'debit', 'B', new Money(1));
            var c0 = new JournalEntry(null, 'credit', 'C', new Money(1));
            var c1 = new JournalEntry(null, 'credit', 'D', new Money(1));

            var account = new Account(null, [d0, d1], [c0, c1]);

            d0.setAccount(account);
            d1.setAccount(account);
            c0.setAccount(account);
            c1.setAccount(account);

            expect(d0.getCorrespondingTitles()).to.eql(['C', 'D']);
            expect(d1.getCorrespondingTitles()).to.eql(['C', 'D']);
            expect(c0.getCorrespondingTitles()).to.eql(['A', 'B']);
            expect(c1.getCorrespondingTitles()).to.eql(['A', 'B']);

        });
    });

});
