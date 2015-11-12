var gulp = require('gulp');
var watch = require('gulp-watch');
var notify = require('gulp-notify');

var del = require('del');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('watch', ['build:js'], function() {
  gulp.watch(['./src/*.js', './src/**/*.js'], ['build:js']);
});

gulp.task('build', ['clean'], function() {
  var extensions = ['.js', '.json', '.es6', '.jsx'];
  return browserify({
      debug: true,
      fullPaths: true,
      extensions: extensions
    })
    .transform(babelify.configure({
      extensions: extensions
    }))
    .require('./src/app.js', {
      entry: true
    })
    .bundle()
    .pipe(source('./app.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify('Javascript compiled'));
});

gulp.task('clean', function() {
  return del(['dist/js/*', 'dist/js']);
});

gulp.task('default', ['clean', 'build']);
