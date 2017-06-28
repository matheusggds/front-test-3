var gulp        = require('gulp'),
sass            = require("gulp-sass"),
browserify      = require('browserify'),
source          = require('vinyl-source-stream'),
jshint          = require('gulp-jshint'),
browserSync     = require('browser-sync').create(),
uglify          = require('gulp-uglify'),
sourcemaps      = require('gulp-sourcemaps'),
concat          = require('gulp-concat');

//Detectar erros e possiveis problemas no seu código javascript
gulp.task('lint', function() {
  return gulp.src(['src/app/**/*.js', 'src/assets/js/**/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

//Concatenar outros .js
gulp.task('scripts', function(){
  return gulp.src('src/assets/**/*.js')
  .pipe(uglify())
  .pipe(concat('vendor.min.js'))
  .pipe(gulp.dest('public/'));
});

gulp.task('browser-sync', function() {

  browserSync.init({
    server: {
      baseDir: "public/",
                // The key is the url to match
                // The value is which folder to serve (relative to your current working directory)
                routes: {
                  "./bower_components": "bower_components",
                  "./node_modules": "node_modules"
                }
              },
              browser:"chrome"
            });
});

//Gerar bundle.js através do app.js 
gulp.task('browserify', function() {
        // Grabs the app.js file
        return browserify('src/app/app.js')
            // bundles it and creates a file called main.js
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('public/js/'));

            browserSync.reload;
          })

gulp.task('copy', ['browserify','sass'], function() {
    gulp.src(['./src/**/*.html','./src/**/*.css'])
        .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream())
});

// Compila os arquivos .scss em src/assets/sass -> public/css/ e roda o BrowserSync
gulp.task('sass', function () {
  return gulp.src('src/assets/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css'));
});

gulp.task('build',['lint', 'copy', 'sass', 'browserify', 'scripts']);

gulp.task('default', ['build', 'browserify', 'browser-sync'], function(){
  gulp.watch("./src/app/**/*.js", ["build"]);
  gulp.watch("./public/**/*.html").on('change', browserSync.reload);
})