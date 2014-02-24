var gulp        = require('gulp');
var gutil       = require('gulp-util');
var lr          = require('tiny-lr');
var livereload  = require('gulp-livereload');
var jshint      = require('gulp-jshint');
var notify      = require('gulp-notify');
var server      = lr();
var app         = require('./server.js');

gulp.task('lint', function(){
  return gulp.src('app/**/*.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
  .pipe(notify({message: 'Linitng Complete!'}));
});

gulp.task('server', function(){
  app.listen(3000);
  console.log('on 3k!!');
});

gulp.task('default', ['lint'], function(){
  gulp.start('server');
});