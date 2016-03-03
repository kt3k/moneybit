import {ASSET, LIABILITY, EQUITY} from './major-account-type'
import Money from './money'

export default class BalanceSheet {

    constructor(ledger) {

        this.ledger = ledger

    }

    /**
     * Gets the subledger list of the given type.
     *
     * @param {MajorAccountType} majorType The type
     */
    subledgers(majorType) {

        return this.ledger.getSubledgersByMajorType(majorType)

    }

    /**
     * Gets the total of subledgers by the given type.
     *
     * @param {MajorAccountType} majorType The type
     * @return {Money}
     */
    totalByMajorType(majorType) {

        return Money.sum(this.subledgers(majorType).map(subledger => subledger.total()))

    }

    /**
     * Returns the retained earnings.
     *
     * @return {Money}
     */
    retainedEarnings() {

        return this.totalByMajorType(ASSET).minus(this.totalByMajorType(LIABILITY)).minus(this.totalByMajorType(EQUITY))

    }

}
