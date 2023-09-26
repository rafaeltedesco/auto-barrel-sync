const path = require('path');
const fs = require('fs');

const barrel = {};
const BASE_PATH = path.resolve(path.basename(__dirname))

const folders = fs.readdirSync(BASE_PATH)
  .filter((item) => !item.includes('.js'));

folders.forEach((folder) => {
  const files = fs.readdirSync(path.resolve(BASE_PATH, folder));
  const folderName = folder.charAt(0).toUpperCase() + folder.slice(1);
  files.forEach((file) => {
    const requiredObj = require(path.resolve(BASE_PATH, folder, file));
    const name = requiredObj.name;
    delete requiredObj.name;
    barrel[folderName] = {
      [name]: requiredObj,
    }
  })
})

module.exports = barrel;