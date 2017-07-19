const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(pug|js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          {loader: 'babel-loader?presets[]=es2015&presets[]=react'},
          {loader: 'pug-as-jsx-loader'}
        ]
      }
    ]
  }
};
