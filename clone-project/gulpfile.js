var gulp = require('gulp');

gulp.task('default', function(){
  console.log('테스트')
});

// gulpfile.js
var sassInlineSvg = require('gulp-sass-inline-svg');
var svgmin = require('gulp-svgmin');
 
gulp.task('sass:svg', function(){
    return gulp.src('./assets/images/svgs/**/*.svg') 
      .pipe(svgmin())
      .pipe(sassInlineSvg({
        destDir: './icons'
      }));
});