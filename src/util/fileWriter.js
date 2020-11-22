const fs = require("fs");

/**
 * @function Write data to a file in the root directory
 * @param  {Array} wordArray
 * @param  {String} fileName
 */
module.exports = fileWriter = (wordArray, fileName) => {
  fs.writeFile(fileName, wordArray.join("\n"), function (err) {
    if (err) throw err;
  });
};
