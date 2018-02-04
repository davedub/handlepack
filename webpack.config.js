const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
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
          title: 'Webpack2 Tutorial',
          hash: true,
          template: './src/index.hbs', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new ExtractTextPlugin("app.css")
      ]
}
