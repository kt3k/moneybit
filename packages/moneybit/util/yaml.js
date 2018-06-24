const yaml = require('js-yaml')

/**
 * Loads the first document in the given yaml data.
 * @param {string} yamlData The yaml data
 * @return {any}
 */
exports.loadFirst = yamlData => yaml.safeLoad(yamlData)

/**
 * Loads the all documents in the given yaml data.
 * @param {string} yamlData The yaml data
 * @return {any[]}
 */
exports.loadAll = yamlData => {
  const docs = []

  yaml.safeLoadAll(yamlData, doc => {
    docs.push(doc)
  })

  return docs
}
