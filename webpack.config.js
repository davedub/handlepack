const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require("path");

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
            use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])
            },
            {
            test: /\.scss$/, 
            use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader'])
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
        new ExtractTextPlugin("app.css")
      ]
}
