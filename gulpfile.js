var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglify_css = require('gulp-uglifycss');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('views', function() {
    gulp.src('pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
});

gulp.task('script', function() {
  gulp.src('editor/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('master'))
});

gulp.task('style', function() {
  gulp.src('editor/*.css')
  .pipe(uglify_css())
  .pipe(gulp.dest('master/style'))
});

gulp.task('Csass',function(){
    gulp.src('editor/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('editor/css'));
});

gulp.task('watch',function() {
    gulp.watch('pug/*.pug',['views'])
    gulp.watch('editor/*.sass',['Csass'])
});

gulp.task('default',['script','Csass','style']);
