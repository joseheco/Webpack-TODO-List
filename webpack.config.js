const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ruleForStyle = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}

const rules = [ruleForStyle]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: { rules }
}
