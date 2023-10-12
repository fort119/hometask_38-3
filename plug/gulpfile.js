import gulp from "gulp";
import miniHTML from "gulp-htmlmin";
import csso from "gulp-csso";
import concat from "gulp-concat";
import uglify from "gulp-uglify";

const copy = () => {
  return gulp.src([
    "./src/**/*.*",
    "!./src/**/*.html",
    "!./src/**/*.css",
    "!./src/**/*.js"
  ])
    .pipe(gulp.dest("./dist"));
}

const html = () => {
  return gulp.src("./src/**/*.html")
    .pipe(miniHTML({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
}

const css = () => {
  return gulp.src("./src/**/*.css")
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'));
}

const js = () => {
  return src('js/**.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

const ser = gulp.series(copy, html, css, js);
gulp.task("default", ser);