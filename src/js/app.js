import ReactDOM from 'react-dom';
import React from 'react';

const scss = require('./../styles/app.scss');
const css = require('./../styles/styles.sss');

console.log("Hello from app.js and webpack dev server!!");

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );


hbs.registerHelper('salutation', attr => new hbs.SafeString(salutationAttribute(attr)));
hbs.registerHelper('randomnum', attr => new hbs.SafeString(randomnumAttribute(attr)));
hbs.registerHelper('whisper', (attr) => new hbs.SafeString(whisperAttribute(attr)));