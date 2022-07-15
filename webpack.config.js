const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: './src/index',
 output: {
  path: path.resolve(__dirname, 'dist'), //__dirname is the current location of the directory
  filename: 'bundle.js'
 },
 // plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
 devServer: {
  static: {
   directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  historyApiFallback: true,
  hot: true,
  open: true, //https://webpack.js.org/configuration/dev-server/#devserveropen
  port: 9001,
 },
 module: {
  rules: [
   {
    test: /\.css$/i, //Look for any files that ends with .css then use the loaders
    include: path.resolve(__dirname, 'src'),
    use: ['style-loader', 'css-loader', 'postcss-loader']
   }
  ]
 }

}