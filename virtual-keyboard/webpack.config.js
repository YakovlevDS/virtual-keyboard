const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ development }) => ({
  devtool: development ? 'eval-cheap-module-source-map' : false,
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: '/dist/',
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  resolve: {
    extensions: ['.js'],
  },
});
