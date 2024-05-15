const gulp = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
function lessTask() {
    return gulp.src('src/**/style.less',
        'src/**/adaptive.less',
        'src/**/animation.less',
        'src/**/slick.less',
        'src/**/slick-theme.less')
        .pipe(less())
        .pipe(concat('style.less'))
        .pipe(cleanCss())
        .pipe(rename({extname:'.min.css'}))
        .pipe(gulp.dest('dist/css'));
}
function cssTask() {
    return gulp.src('src/**/animate.min.css')
        .pipe(gulp.dest('dist/css'));
}
function jsTask() {
    return gulp.src('src/**/app.js')
        .pipe(concat('app.js'))
        .pipe(rename({extname:'.min.js'}))
        .pipe(gulp.dest('dist/js'));
}
function watchTask() {
    gulp.watch('src/styles/*.less', lessTask);
}

exports.default = gulp.series(lessTask, cssTask, jsTask, watchTask);