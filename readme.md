# handlepack

Tracking the [YouTube videos](https://www.youtube.com/playlist?list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY) by Petr Tichy, a/k/a [ihatetomatoes](https://ihatetomatoes.net/), for a Webpack 2 setup and configuration through Lesson 7. 

The latest revisions added a chunks property to `webpack.config.js` which needed fine tuning so that style (as opposed to script) assets are not exclued.

There are some variations to what Petr covers. E.g., PostCSS, Sass and Handlebars get pre-compiled using [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin), [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and [handlebars-loader](https://github.com/pcardune/handlebars-loader).

The [handlebars](http://handlebarsjs.com) loader for [webpack](https://github.com/webpack/webpack) requires aliasing. Partials are {{> pathTo/partial }}. Helpers are {{ pathTo/helper }}. But there is a ReferenceError in the Javascript console of "cant find variable: hbs". Also see [this issue](https://github.com/pcardune/handlebars-loader/issues/118) on making sure that the knownHelpersOnly property of handlebars-loader, which defaults to true, is set to false.

React and Babel are added. Multi-templating is set up but not routing. 

## Install

`npm install`

## Run

`npm run dev`

## Output

Webpack dev server (as opposed to the Webpack module itself) serves files out of memory rather than writing them to disk. To see the files as saved to disk by Webpack, change the script for "dev" in package.json to `webpack -d` from `webpack-dev-server`.  Then try running `npm run dev` again. As now configured, the "prod" script does the same thing.
