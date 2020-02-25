const path = require('path');

module.exports = {
  entry: './index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'randomEmojy.js',
    library: "randomEmojyShark",
    libraryTarget: "umd", 
    publicPath: "/assets/"
  }
};