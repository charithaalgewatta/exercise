const fs = require("fs");

module.exports = fileWriter = (wordArray, fileName) => {
  fs.writeFile(fileName, wordArray.join("\n"), function (err) {
    if (err) throw err;
  });
};
