const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production' // true or false

var extractSSS = new ExtractTextPlugin({
    filename: 'css/styles.css',
    disable: false
});

var extractSCSS = new ExtractTextPlugin({
    filename: 'css/app.css',
    disable: false
});

const webpack = require('webpack');
const path = require("path");

const cssDev = ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] 
const cssProd = ExtractTextPlugin.extract({
    use: [ 'css-loader', 'sass-loader', 'postcss-loader' ],
    fallback: 'style-loader',
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
            use: extractSSS.extract([ 'css-loader', 'postcss-loader' ])
            },
            {
            test: /\.scss$/, 
            use: extractSCSS.extract([ 'css-loader', 'sass-loader' ])
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
          template: './src/index.pug', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Contact_page', // names the output ..?
            hash: true, // creates a hash for every generated file
         //   chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.hbs', 
          }),    
        extractSSS,
        extractSCSS,
        new webpack.NamedModulesPlugin(),
          // prints more readable module names in the browser console on HMR update
        new webpack.HotModuleReplacementPlugin()
          // enable HMR globally
      ]
}
