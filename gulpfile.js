const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function style() {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
}

function watch() {
    gulp.watch('./assets/scss/**/*.scss', style);
}

function prefix() {
    return gulp.src('./assets/css/**/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css/'));
}

exports.style = style;
exports.watch = watch;
exports.prefix = prefix;