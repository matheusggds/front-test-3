var gulp = require('gulp'),
uglify = require('gulp-uglify'),
server = require('gulp-live-server'),
browserify = require('gulp-browserify'),
rename = require("gulp-rename"),
sass = require("gulp-sass"),
sourcemaps = require('gulp-sourcemaps'),
gulputil = require('gulp-util');


gulp.task('default', ['browserify','serve', 'watch', 'sass', 'sass:watch']);


gulp.task('watch', function() {
    gulp.watch('public/app/**/*.js', ['browserify']);
});

gulp.task('serve', function() {
    var serve = server.static('public/', 3000);
    serve.start();
    gulp.watch('public/app/js/**/*.js', function (file) {
        server.notify.apply(serve, [file]);
    });
    gulp.watch('public/*.html', function (file) {
        server.notify.apply(serve, [file]);
    });

});

gulp.task('browserify', function(){
    return gulp.src(['public/app/app.js'])
    .pipe(browserify())
        //.pipe(uglify({ mangle: false }))
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest('public/js/'));
    });

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});