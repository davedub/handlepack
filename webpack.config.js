

var path = require("path");
var HandlebarsPlugin = require("handlebars-webpack-plugin");

// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    }
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       title: 'Webpack2 Tutorial',
    //       template: './src/index.ejs', // Load a custom template (lodash by default see the FAQ for details)
    //     })
    //   ]
}

 
var webpackConfig = {
 
    plugins: [
 
        new HandlebarsPlugin({
            // path to hbs entry file(s)
            entry: path.join(process.cwd(), "app", "src", "*.hbs"),
            // output path and filename(s). This should lie within the webpacks output-folder
            // if ommited, the input filepath stripped of its extension will be used
            output: path.join(process.cwd(), "build", "[name].html"),
            // data passed to main hbs template: `main-template(data)`
            data: require("./app/data/project.json"),
            // or add it as filepath to rebuild data on change using webpack-dev-server
            data: path.join(__dirname, "app/data/project.json"),
 
            // globbed path to partials, where folder/filename is unique
            partials: [
                path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
            ],
 
            // register custom helpers. May be either a function or a glob-pattern
            helpers: {
                nameOfHbsHelper: Function.prototype,
                projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
            },
 
            // hooks
            onBeforeSetup: function (Handlebars) {},
            onBeforeAddPartials: function (Handlebars, partialsMap) {},
            onBeforeCompile: function (Handlebars, templateContent) {},
            onBeforeRender: function (Handlebars, data) {},
            onBeforeSave: function (Handlebars, resultHtml, filename) {},
            onDone: function (Handlebars, filename) {}
        })
    ]
};