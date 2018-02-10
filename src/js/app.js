import ReactDOM from 'react-dom';
import React from 'react';
import scss from './../styles/app.scss';
import sss from './../styles/styles.sss';

// const scss = require('./../styles/app.scss');
// const css = require('./../styles/styles.sss');

console.log("Hello from app.js and webpack dev server!!");
console.log("using hot module replacement");
console.log(this.loaders);

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );


hbs.registerHelper('salutation', attr => new hbs.SafeString(salutationAttribute(attr)));
hbs.registerHelper('randomnum', attr => new hbs.SafeString(randomnumAttribute(attr)));
hbs.registerHelper('whisper', (attr) => new hbs.SafeString(whisperAttribute(attr)));