var directory_Base = "./";
var gulp = require('gulp');
var browserSync = require('browser-sync');
var compass = require('gulp-compass');
var sourcemaps = require('gulp-sourcemaps');
var image = require('gulp-image');

// Start the server
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('image', function () {
  gulp.src('./images-source/**')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./images'));
});

gulp.task('default', ['image']);

// Compile SASS & auto-inject into browsers
gulp.task('compass', function () {
    return gulp.src(directory_Base + 'css/*.scss')
        .pipe(compass({
	      config_file: directory_Base + 'config.rb',
	      css: directory_Base + 'css',
	      sass: directory_Base + 'css'
	    }))
        .pipe(browserSync.reload({stream:true}));
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync', 'compass'], function () {
    gulp.watch("./css/*.scss", ['compass']);
    gulp.watch("./*.html").on("change", browserSync.reload);
});