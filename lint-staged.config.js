const micromatch = require('micromatch');

module.exports = {
  '*.md': (files) => {
    // from `files` filter those _NOT_ matching `*test.js`
    const match = micromatch.not(files, 'README.md');
    return `eslint ${match.join(' ')}`;
  },
};
