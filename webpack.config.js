const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : {
    signDisplay  :'./frontends/signDisplay/index.jsx',
    adminPanel   :'./frontends/serverSide/admin/index.jsx',
    userControls :'./frontends/serverSide/userControls/index.jsx',
  },
  output : {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules : [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.(jsx)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']}
    ]
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
      template : 'frontends/indexTemplate.html',
      chunks: ['signDisplay'],
      filename: 'signDisplay.html'
    }),
    new HtmlWebpackPlugin ({
      template : 'frontends/indexTemplate.html',
      chunks: ['adminPanel'],
      filename: 'adminPanel.html'
    }),
    new HtmlWebpackPlugin ({
      template : 'frontends/indexTemplate.html',
      chunks: ['userControls'],
      filename: 'userControls.html'
    }),
  ]
};
