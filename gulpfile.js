var gulp = require('gulp'),

    // Dev server
    connect = require('gulp-connect'),
    runSequence = require('run-sequence');

var env,
    port = 4000;

gulp.task('httpd', function() {
  connect.server({
    root: dest,
    port: port
  });
});

gulp.task('default', function(callback) {
  runSequence(
    ['httpd'],
    callback
  )
});
