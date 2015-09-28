var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
    gulp.watch(paths.sourceTS, ['build-system', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.css + '**/*.css', ['build-css',browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.sass + '**/styles.scss',  ['build-sass',browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.js, ['build-js',browserSync.reload]).on('change', reportChange);
});