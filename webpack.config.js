const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : {
    signDisplay :'./frontends/signDisplay/index.jsx'
  },
  output : {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    reules : [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']}
    ]
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
      template : 'app/index.html'
    })
  ]
};
