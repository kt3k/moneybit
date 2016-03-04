import yaml from 'js-yaml'

import AccountTypeChartFactory from '../domain/account-type-chart-factory'

/**
 * Creates the chart model from the yaml buffer.
 *
 * @param {Buffer} chartYaml The chart yaml byte buffer
 * @return {AccountTypeChart}
 */
export default (chartYaml) => {

    return new AccountTypeChartFactory().createFromObject(yaml.safeLoad(chartYaml))

}
