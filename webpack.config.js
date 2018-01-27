
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack2 Tutorial',
          template: './src/index.ejs', // Load a custom template (lodash by default see the FAQ for details)
        })
      ]
}