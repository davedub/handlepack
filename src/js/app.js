import ReactDOM from 'react-dom';

import React from 'react';

import Popper from 'popper.js';

import sss from './../styles/styles.sss';

console.log("Hello from app.js and webpack dev server!!");
console.log("using hot module replacement");
console.log(this.loaders);

ReactDOM.render( <h1 > Hello, world! </h1>,
  document.getElementById('root')
);

hbs.registerHelper('salutation', attr => new hbs.SafeString(salutationAttribute(attr)));
hbs.registerHelper('randomnum', attr => new hbs.SafeString(randomnumAttribute(attr)));
hbs.registerHelper('whisper', (attr) => new hbs.SafeString(whisperAttribute(attr)));