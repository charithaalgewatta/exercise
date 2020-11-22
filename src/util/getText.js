const { getRandomWordSync, getRandomWord } = require("../../word-maker");
const { HANDELED_ERROR_TEXT } = require("../assets/constants");

/**
 * @param  {Boolean} withErrors=false
 */
const getTextSync = ({ withErrors = false } = {}) => {
  try {
    return getRandomWordSync({ withErrors });
  } catch (error) {
    return HANDELED_ERROR_TEXT;
  }
};
/**
 * @param  {Boolean} withErrors=false
 * @param  {Boolean} slow=false
 */
const getTextAsync = async ({ withErrors = false, slow = false } = {}) => {
  try {
    return await getRandomWord({ withErrors, slow });
  } catch (error) {
    return HANDELED_ERROR_TEXT;
  }
};

module.exports = {
  getTextAsync,
  getTextSync,
};
