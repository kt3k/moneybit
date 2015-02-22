

var JournalEntry = require('../../lib/domain/journal-entry');
var Money = require('../../lib/domain/money');



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

});
