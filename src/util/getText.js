const { getRandomWordSync, getRandomWord } = require("../../word-maker");
const { HANDELED_ERROR_TEXT } = require("../assets/constants");

/**
 *
 * @param {*} param0
 */
const getTextSync = async ({ withErrors = false } = {}) => {
  try {
    return getRandomWordSync(withErrors);
  } catch (error) {
    return HANDELED_ERROR_TEXT;
  }
};

/**
 * @function
 * @param {*} param0
 * @returns {string}
 */
const getText = async ({ withErrors = false, slow = false } = {}) => {
  try {
    return getRandomWord({ slow, withErrors });
  } catch (error) {
    return HANDELED_ERROR_TEXT;
  }
};

module.exports = {
  getText,
  getTextSync,
};
