'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

    // nodemon our expressjs server
    exec:'npm start',
    script:'src/server/index.js',
    // watch core server file(s) that require server restart on change
    watch: ['src/server/index.js']
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:7000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs

    // open the proxied app in chrome ( windows ) | google-chrome ( linux )
    browser: ['chrome']
  });
});

gulp.task('js',  function () {
  return gulp.src('src/client/app/**/*.js')
    // do stuff to JavaScript files
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(babel({presets:['es2015']}))
    .pipe(gulp.dest('src/client/build/'));
});

gulp.task('css', function () {
  return gulp.src('public/**/*.css')
    .pipe(browserSync.reload({ stream: true }));
})

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('src/client/app/**/*.js',   ['js', browserSync.reload]);
  gulp.watch('src/client/app/**/*.css',  ['css']);
  gulp.watch('src/client/app/**/*.html', ['bs-reload']);
});
