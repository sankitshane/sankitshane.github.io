var gulp = require('gulp');
var uglify = require('gulp-uglify');
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

gulp.task('Csass',function(){
    gulp.src('editor/main.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('editor/css'));
    gulp.src('editor/screen50.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('editor/css'));
    gulp.src('editor/screen70.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('editor/css'));
    gulp.src('editor/screen80.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('editor/css'));
});

gulp.task('watch',function() {
    gulp.watch('pug/*.pug',['views'])
    gulp.watch('editor/*.sass',['Csass'])
});

gulp.task('default',['script','Csass']);
