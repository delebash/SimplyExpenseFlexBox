var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');


//using typescript
gulp.task('build-system', function () {
  var tsResult = gulp.src([paths.sourceTS, paths.typings, paths.aurelia], {base: paths.root})
    //.pipe(changed(paths.output, {extension: '.ts'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(ts({
      typescript: require('typescript'),
      declarationFiles: false,
      noExternalResolve: true,
      target: "es5",
      module: "commonjs",
      emitDecoratorMetadata: true,
      experimentalDecorators: true
    }));
  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
    tsResult.pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'})),
    tsResult.dts.pipe(gulp.dest(paths.typingsOutput)),
    tsResult.js.pipe(gulp.dest(paths.output))
  ]);
});

gulp.task('build-sass', function () {
  gulp.src(paths.sass + '**/styles.scss', {base: paths.sass})
    //  .pipe(changed(paths.sass, {extension: '.scss'}))
    .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'expanded',
      //includePaths: [
      //  paths.sass
      //  //   paths.jspmDir + '/github/Dogfalo/materialize@0.96.0/sass',
      //],
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssOutput))
});

// copies changed css files to the output directory
gulp.task('build-css', function () {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});
// copies changed html files to the output directory
gulp.task('build-js', function () {
  return gulp.src(paths.js)
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(gulp.dest(paths.jsOutput));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css', 'build-sass','build-js'],
    callback
  );
});
gulp.task('default', ['build']);
