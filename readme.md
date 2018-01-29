# handlepack

An attempt to get [handlebars](http://handlebarsjs.com) template loader for [webpack](https://github.com/webpack/webpack) working. Partials working with double brackets and a > sign. Helpers working with just double brackets. 

Also loading pre-compiled Sass and PostCSS styles (that works OK).

## Installation

`npm install`

## Compile

`npm run dev`

No web server hooked up to this, just checking to see how CSS (PostCSS and Sass) and JS is pre-compiled in Webpack, using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and [Handlebars-Loader](https://github.com/pcardune/handlebars-loader).