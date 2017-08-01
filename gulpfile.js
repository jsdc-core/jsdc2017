var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var argv         = require('yargs').argv;
var del          = require('del');

var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// 編譯 scss
gulp.task('scss', function() {
  return gulp.src(['./source/scss/**/*.scss', './source/scss/**/*.css'])
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

// 編譯 pug
gulp.task('pug', function() {
  return gulp.src(['source/views/*.pug', 'source/views/layout/*.pug'])
    .pipe(plugins.plumber())
    .pipe(plugins.pug())
    .pipe(gulp.dest('./dist'));
});

// 將 js 編譯成 min js
gulp.task('script', function() {
  return gulp.src('./source/js/*.js')
    .pipe(plugins.plumber())
    // .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'));
});

// 壓縮 images 檔案大小
gulp.task('imagemin', function() {
  return gulp.src('./source/images/*')
    .pipe(plugins.plumber())
    .pipe(plugins.imagemin([
      plugins.imagemin.jpegtran({progressive: true}),
      plugins.imagemin.optipng({optimizationLevel: 5}),
    ],
    {verbose: true}
    ))
    .pipe(gulp.dest('./dist/images'))
});

gulp.task('GA', function() {
  return gulp.src('./source/googlea1cf7867353d96e9.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('copyFontAwesome', function(){
  return gulp.src('./source/scss/font-awesome/fonts/*')
    .pipe(gulp.dest('./dist/css/font-awesome/fonts'));
});

// 清掉 dist 裡面 css 跟 js 的資料夾
gulp.task('clean', function() {
  return del(['./dist/css/*.css', './dist/css/*.map', './dist/js/*.js', '/dist/images/*']);
});

gulp.task('browser-sync', ['build'], function() {
  browserSync({
    open: !!argv.open,
    notify: !!argv.notify,
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('build', ['scss', 'script', 'imagemin', 'pug', 'copyFontAwesome', 'GA']);

gulp.task('serve-dev', ['clean', 'build', 'browser-sync'], function () {
  gulp.watch('./source/scss/**/*.scss', ['scss', reload]);
  gulp.watch('./source/js/*.js', ['script', reload]);
  gulp.watch('./source/views/**/*.pug', ['pug', reload]);
});

gulp.task('default', ['serve-dev']);
