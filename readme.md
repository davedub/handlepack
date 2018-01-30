# handlepack

An attempt to get [handlebars](http://handlebarsjs.com) template loader for [webpack](https://github.com/webpack/webpack) working. Partials working with {{> pathTo/partial }}. Helpers working with just {{ pathTo/helper }}. Also loading pre-compiled Sass and PostCSS styles.

## Installation

`npm install`

## Compile

`npm run dev`

No web server hooked up to this, just checking to see how CSS (PostCSS and Sass) and JS get pre-compiled via Webpack, using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and [handlebars-loader](https://github.com/pcardune/handlebars-loader).