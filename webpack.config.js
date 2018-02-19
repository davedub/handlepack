const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production' // true or false

var cssDev1 = ['style-loader', 'css-loader', 'postcss-loader'];
var cssDev2 = ['style-loader', 'css-loader', 'sass-loader'];

const extractProd1 = new ExtractTextPlugin('css/styles.css');
const extractProd2 = new ExtractTextPlugin('css/app.css');

const webpack = require('webpack');
const path = require("path");

const cssProd1 = extractProd1.extract({
    fallback: 'style-loader',
    use: [ 'css-loader', 'postcss-loader' ],
    publicPath: '/dist'
    });
const cssProd2 = extractProd2.extract({
    fallback: 'style-loader',
    use: [ 'css-loader', 'sass-loader' ],
    publicPath: '/dist'
    });
const cssConfig = isProd ? [cssProd1, cssProd2] : [cssDev1, cssDev2];

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
            use: isProd ? cssProd1 : cssDev1
            },
            {
            test: /\.scss$/, 
            use: isProd ? cssProd2 : cssDev2
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
            test: /\.(png|jpe?g|gif|svg)$/,
            use: 'file-loader?name=[hash:12].[ext]&outputPath=images/'
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
        compress: false,
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
          template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Contact_page', // names the output ..?
            hash: true, // creates a hash for every generated file
         //   chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.hbs', 
          }),    
        extractProd1,
        extractProd2,
        new webpack.NamedModulesPlugin(),
          // prints more readable module names in the browser console on HMR update
        new webpack.HotModuleReplacementPlugin()
          // enable HMR globally
      ]
}
