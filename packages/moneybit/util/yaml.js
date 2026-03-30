import yaml from "js-yaml";

/**
 * Loads the first document in the given yaml data.
 * @param {string} yamlData The yaml data
 * @return {any}
 */
export const loadFirst = (yamlData) => yaml.load(yamlData);

/**
 * Loads the all documents in the given yaml data.
 * @param {string} yamlData The yaml data
 * @return {any[]}
 */
export const loadAll = (yamlData) => {
  const docs = [];

  yaml.loadAll(yamlData, (doc) => {
    docs.push(doc);
  });

  return docs;
};
