var fs = require('fs'),
    gulp = require('gulp'),

    // HTML
    jade = require('gulp-jade'),

    // JS
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

    // Dev server
    connect = require('gulp-connect'),
    runSequence = require('run-sequence');

var env,
    port = 4000,
    src  = './src',
    dest = './dist',
    tmp  = './tmp',
    srcs = {
      pub: src + '/public/**/*',
      img: src + '/assets/images/**/*',
      jade: src + '/templates/**/*',
      jadeViews: src + '/templates/views/**/*.jade',
      sass: src + '/assets/stylesheets/**/*.scss',
      js: src + '/assets/javascripts/**/*.js'
    },
    dests = {
      pub: dest + '/',
      jade: dest + '/',
      assets: dest + '/assets/',
      img: dest + '/assets/images/',
      sass: dest + '/assets/stylesheets/',
      js: dest + '/assets/javascripts/'
    },
    jadeLocals = {
      getRevisionedPath: function(path) {
        var absolutePathPrefix = dests.assets.replace(dest, ''),
            relativePath = path.replace(absolutePathPrefix, '');

        if (jadeLocals.revisionManifest) {
          return absolutePathPrefix.substring(1) + jadeLocals.revisionManifest[relativePath];
        }

        return path;
      }
    };

gulp.task('templates', function() {
  var hasRevisionManifest = fs.existsSync(dests.assets + '/rev-manifest.json');

  if (hasRevisionManifest) {
    jadeLocals.revisionManifest = JSON.parse(fs.readFileSync(dests.assets + '/rev-manifest.json', 'utf8'));
  }

  return gulp.src(srcs.jadeViews)
    .pipe(jade({
      basedir: srcs.jade.replace('**/*', ''),
      locals:jadeLocals
    }))
    .pipe(gulp.dest(dests.jade));
});

gulp.task('httpd', function() {
  connect.server({
    root: dest,
    port: port
  });
});

gulp.task('javascripts', function() {
  return gulp.src(srcs.js)
    .pipe(sourcemaps.init())
    .pipe(concat('application.js'))
    .pipe(gulp.dest(dests.js))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(sourcemaps.write('../'))
    .pipe(gulp.dest(dests.js));
});

gulp.task('default', function(callback) {
  env = jadeLocals.environment = 'development';

  runSequence(
    ['templates'],
    ['javascripts'],
    ['httpd'],
    callback
  )
});
