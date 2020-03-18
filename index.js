require('@babel/register');
['.css', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('@babel/polyfill');
require('server/server.js');