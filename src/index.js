const path = require('path');
const fs = require('fs');

const barrel = {};

const folders = fs.readdirSync(path.resolve(__dirname))
  .filter((item) => !item.includes('.js'));

folders.forEach((folder) => {
  const files = fs.readdirSync(path.resolve(__dirname, folder));
  console.log(files);
  const folderName = folder.charAt(0).toUpperCase() + folder.slice(1);
  files.forEach((file) => {
    const requiredObj = require(path.resolve(__dirname, folder, file));
    const name = requiredObj.name;
    delete requiredObj.name;
    barrel[folderName] = {
      [name]: requiredObj,
    }
  })
})

module.exports = barrel;