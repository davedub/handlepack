const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

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
            {
            test: /\.scss$/, 
            use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader'])
            },
            {
            test: /\.hbs$/, 
            use: 'handlebars-loader'
            }
            ]
        },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack2 Tutorial',
          minify: {
              collapseWhitespace: true
          },
          hash: true,
          template: './src/index.hbs', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new ExtractTextPlugin("app.css")
      ]
}
