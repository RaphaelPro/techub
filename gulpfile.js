var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src(['./assets/scss/**/*.scss', './node_modules/bootstrap/scss/*.scss'])
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./assets/css/'))
});

gulp.task('watch', gulp.series(function(){
  gulp.watch(['./node_modules/bootstrap/scss/*.scss', './assets/scss/*.scss'], gulp.parallel(['sass']));
}));

gulp.task('default', gulp.series(['sass', 'watch']));