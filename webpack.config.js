const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require("path");

const isProd = process.env.NODE_ENV === 'production' // true or false
const cssDev = ['sass-loader', 'postcss-loader', 'style-loader', 'css-loader' ];
const cssProd = ExtractTextPlugin({
    fallback: 'style-loader',
    loader: [ 'postcss-loader', 'sass-loader', 'css-loader' ],
    allChunks: true,
    publicPath: '/dist'
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: './src/js/app.js',
        contact: './src/js/contact.js'
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.sss$/,
            use: cssConfig
            },
            {
            test: /\.scss$/, 
            use: cssConfig
            },
            {
            test: /\.js$/, 
            exclude: path.resolve(__dirname, 'node_modules'),
            use: 'babel-loader'
            },
            {
            test: /\.pug$/, 
            exclude: path.resolve(__dirname, 'node_modules'),
            use: ['html-loader', 'pug-html-loader']
            },
            {
            test: /\.hbs$/, 
            use: [{
                    loader: 'handlebars-loader',
                    options: {
                        compat: true,
                        helperDirs: path.join(__dirname, 'src', 'helpers'),
                        partialDirs: [
                            path.join(__dirname, 'src', 'partials')
                        ],
                        knownHelpersOnly: false,
                        runtimePath: 'handlebars/runtime'
                    }
                }]
            }
            ]
        },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        stats: "errors-only",
        open: true
    },
    resolve: {
        alias: {
            'handlebars/runtime': path.resolve(__dirname, 'node_modules/handlebars/dist/cjs/handlebars.runtime'),
            'handlebars': path.resolve(__dirname, 'node_modules/handlebars/dist/cjs/handlebars.runtime'),
            [path.resolve(__dirname, 'node_modules/handlebars/dist/cjs/handlebars.runtime')]: 'node_modules/handlebars/dist/cjs/handlebars.runtime'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack2 Tutorial', // names the output ..?
          // minify: {
              // collapseWhitespace: true
          // },
          hash: true, // creates a hash for every generated file
          excludeChunks: ['contact'],
          template: './src/index.pug', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Contact_page', // names the output ..?
            hash: true, // creates a hash for every generated file
         //   chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.hbs', 
          }),    
        new ExtractTextPlugin({
            filename: "app.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
          // prints more readable module names in the browser console on HMR update
        new webpack.HotModuleReplacementPlugin()
          // enabme HMR globally
      ]
}
