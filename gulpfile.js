var gulp = required('gulp');
var uglify = required('gulp-uglify');
var uglify_css = required('gulp-uglifycss')
var sass = required('gulp-ruby-sass')

gulp.task('script', function() {
  gulp.src('editor/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('master'))
});

gulp.task('style', function() {
  gulp.src('editor/*.css')
  .pipe(uglifycss())
  .pipe(gulp.dest('master/style'))
});

gulp.task('Csass',function(){
  gulp.src('editor/style/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('editor'))
});

gulp.task('default',['script','Csass','style']);
