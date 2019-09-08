const gulp = require('gulp'),
  sass = require('gulp-sass'),
  htmlmin = require('gulp-htmlmin'),
  cleanCSS = require('gulp-clean-css'),
  replace = require('gulp-replace'),
  pug = require('gulp-pug'),
  data = require('gulp-data'),
  fs = require('fs');

sass.compiler = require('node-sass');

gulp.task('html', function () {
  return gulp.src('./src/templates/*.pug')
    .pipe(data(function(file){
      return JSON.parse(fs.readFileSync('assets/ajax/tab1.json'))
    }))
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series(['sass','html','js']));

gulp.task('watch', function () {
  gulp.watch('./src/js/*.js', gulp.series('default'));
  gulp.watch('./src/templates/**', gulp.series('default'));
  gulp.watch('./src/styles/**',gulp.series('default'));
});
