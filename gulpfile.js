const gulp = require('gulp'),
  less = require('gulp-less')
  browserSync = require('browser-sync')
  babel = require('gulp-babel')
  imagemin = require('gulp-imagemin');


gulp.task('less', () => {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('html', () => {
  return gulp.src('./index.html')
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('js', () => {
  return gulp.src([
      './src/js/*.js'
    ])
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest('./build/js/'))
})

gulp.task('img', () => {
  return gulp.src('./src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/img/'))
})

gulp.task('watch', () => {
  gulp.watch('./*.html', gulp.parallel('html'))
  gulp.watch('./src/less/*.less', gulp.parallel('less'))
  gulp.watch('./src/js/*.js', gulp.parallel('js'))
})


gulp.task('default', gulp.parallel('browserSync', 'watch'))
