var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function () {
    gulp.watch(paths.sourceTS, ['build-system', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.css + '**/*.css', ['build-css', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.sass + '**/*.scss', ['build-sass', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.js, ['build-js', browserSync.reload]).on('change', reportChange);
});