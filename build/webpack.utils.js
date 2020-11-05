const path = require('path');
const glob = require('glob');

function getComponentEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const componentEntries = files.reduce((ret, item) => {
    const itemPath = join(path, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'));
    } else {
      const [name] = item.split('.');
      ret[name] = resolve(`${itemPath}`);
    }
    return ret;
  }, {});

  return componentEntries;
}

getComponentEntries('components');
