/**
 * @package      coffeecoppertheme
 * @author       Janis Andrejs Laurins @ [ janislaurins@gmail.com ]
 * @license      http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 */
let gulp = require('gulp');
let sass = require('gulp-sass');
let dir = 'src/assets';

function style() {
  return (  
    gulp.src(dir + '/scss/main.scss')
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest('src/assets/css/'))
  );
}
exports.style = style


function watch(){
  style()
  gulp.watch(dir + '/scss/**/*.scss', style)
}
exports.watch = watch

function postcss(){
  const postcss    = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp.src(dir + '/css/main-min.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest(dir + '/build/') )
}
exports.postcss = postcss
