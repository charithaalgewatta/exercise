const fs = require("fs");

module.exports = fileWriter = (wordArray, fileName) => {
  console.log("writing");
  fs.writeFile(fileName, wordArray.join("\n"), function (err) {
    if (err) throw err;
    console.log("Updated!");
  });
};
