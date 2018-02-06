# handlepack

This project tracks the [ihatetomatoes YouTube videos](https://www.youtube.com/channel/UC7O6CntQoAI-wYyJxYiqNUg) for a Webpack 2 setup and configuration. PostCSS, Sass and Handlebars get pre-compiled via Webpack, using [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin), [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and [handlebars-loader](https://github.com/pcardune/handlebars-loader).

The [handlebars](http://handlebarsjs.com) loader for [webpack](https://github.com/webpack/webpack) requires some aliasing in its webpack config file. Partials are {{> pathTo/partial }}. Helpers are {{ pathTo/helper }}. But there is a ReferenceError in the Javascript console of "cant find variable: hbs". 

React and Babel have been added but routing to other pages is not yet set up. 

## Installation

`npm install`

## Run on localhost:8080

`npm run dev`

## Compile the project without running localhost

Webpack dev server (as opposed to the Webpack module itself) serves files out of memory rather than writing them to disk. To see the files that are written by Webpack, change the script for "dev" in package.json to `webpack -d` from `webpack-dev-server`.  Then try running `npm run dev` again.
