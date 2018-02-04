const scss = require('./styles/app.scss');
const css = require('./styles/styles.sss');

console.log("Hello from app.js and webpack dev server!!");

hbs.registerHelper('salutation', attr => new hbs.SafeString(salutationAttribute(attr)));
hbs.registerHelper('randomnum', attr => new hbs.SafeString(randomnumAttribute(attr)));
hbs.registerHelper('whisper', (...args) => new hbs.SafeString(whisperAttribute(attr)));