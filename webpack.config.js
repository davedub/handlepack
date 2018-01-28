const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.sss$/,
            use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])
            },
            {test: /\.scss$/, 
            use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader'])
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack2 Tutorial',
          minify: {
              collapseWhitespace: true
          },
          hash: true,
          template: './src/index.ejs', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new ExtractTextPlugin("app.css")
      ]
}