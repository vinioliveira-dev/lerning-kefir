const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules/kefir')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};