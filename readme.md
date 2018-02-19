# handlepack

Tracking [YouTube videos](https://www.youtube.com/playlist?list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY) by Petr Tichy, a/k/a [ihatetomatoes](https://ihatetomatoes.net/), for Webpack 2 setup and configuration, through Video 9. 

There are some variations to Petr's tutorials. E.g., PostCSS, Sass and Handlebars get pre-compiled using [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin), [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and [handlebars-loader](https://github.com/pcardune/handlebars-loader).

The [handlebars](http://handlebarsjs.com) loader for [webpack](https://github.com/webpack/webpack) requires aliasing. Partials are {{> pathTo/partial }}. Helpers are {{ pathTo/helper }}. But there is a ReferenceError in the Javascript console of "cant find variable: hbs". Also see [this issue](https://github.com/pcardune/handlebars-loader/issues/118) on making sure that the knownHelpersOnly property of handlebars-loader, which defaults to true, is set to false.

React and Babel are added. Multi-templating is set up but not routing. 

## Install

`npm install`

## Run

`npm run dev`

## Output

>Handlebars is not used on the new "pug" branch (replaced with .pug) templates but I need to see if they can co-exist. In the "pug" branch, the old hbs template entry point is renamed `index_hbs.hbs.`