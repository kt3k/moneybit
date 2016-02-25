/**
 * The ledger model.
 *
 * This represents the general ledger.
 *
 * 総勘定元帳
 */
export default class Ledger {

    /**
     * @constructor
     * @param {Array<Subledger>} subledgers
     */
    constructor(subledgers) {

        this.subledgers = subledgers

    }

}
