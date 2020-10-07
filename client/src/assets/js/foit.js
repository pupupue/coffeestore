var FontFaceObserver = require('fontfaceobserver');

var normal = new FontFaceObserver('notoSerif');
var italic = new FontFaceObserver('notoSerifBold');

var html = document.documentElement;

html.classList.add('fonts-loading');

Promise.all([
  normal.load(null, 2000),
  italic.load(null, 2000)
]).then(function () {
  html.classList.remove('fonts-loading');
  html.classList.add('fonts-loaded');
}).catch(function () {
  html.classList.remove('fonts-loading');
  html.classList.add('fonts-failed');
});
