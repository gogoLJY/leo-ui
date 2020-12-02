const path = require('path');
const glob = require('glob');

export function base(basename) {
  return `src/components/${basename}/index.js`;
}
export const getComponentEntries = (pathname = '') => {
  const entries = {};

  const entryFiles = glob.sync(
    path.join(__dirname, pathname || '../src/components/*/index.js')
  );

  entryFiles.forEach((file, index) => {
    const entryFile = entryFiles[index];
    const matchRes = entryFile.match(/src\/components\/(.*)\/index\.js/);
    const pageName = matchRes && matchRes[1];

    entry[pageName] = path.resolve(
      __dirname,
      `../src/components/${pageName}/index.js`
    );
  });

  return {
    entries,
  };
};
