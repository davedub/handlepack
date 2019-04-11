const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === 'production' // true or false

var cssDev1 = ['style-loader', 'css-loader', 'postcss-loader'];
var cssDev2 = ['style-loader', 'css-loader', 'sass-loader'];

const extractProd1 = new MiniCssExtractPlugin('css/[name].css');
const extractProd2 = new MiniCssExtractPlugin('css/[name].css');

const webpack = require('webpack');
const path = require("path");

const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    entry: {
        app: './src/js/app.js',
        // entry: 'bootstrap-loader/extractStyles',
        bootstrap: bootstrapConfig,
        contact: './src/js/contact.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c|s)ss$/,
                resolve: {
                    extensions: ['.scss', '.sass', '.sss'],
                },
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[hash:12].[ext]',
                    //'file-loader?name=[hash:12].[ext]&outputPath=images/&publicPath=images/',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(woff2?|svg)$/,
                use: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                use: 'file-loader?name=fonts/[name].[ext]'
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Popper: ['popper.js', 'default'],
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        }),
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR update
        new webpack.HotModuleReplacementPlugin()
        // enable HMR globally
    ]
}