const { task } = require('gulp');
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
const concatJS = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const gulpClean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const gulpFont= require('gulp-fonter');
const imageminJpegtran = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');


const cssFiles = ['./src/style/font.css',
                    './src/style/pluses.css',
                    './src/style/citate.css', 
                    './src/style/skills.css',
                    './src/style/works.css',
                    './src/style/form.css',
                    './src/style/footer.css',
                    './src/style/media.css'];

const jsFiles = ['./src/js/viewport.js',
                    './src/js/works.js', './src/js/email.js'];

// Стили
function styles() {
    return gulp.src(cssFiles)
      .pipe(concatCss("style.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/'));
};

// JS
function scripts(){
    return gulp.src(jsFiles)
    .pipe(concatJS("index.js"))
    .pipe(gulp.dest('./dist/'));
}

// Обработка шрифтов
function fonts(){
    return gulp
      .src('./src/fonts/*')
      .pipe(gulpFont({
          subset: [66,67,68, 69, 70, 71],
          formats: ['woff']
        }))
      .pipe(gulp.dest('./dist/fonts/*'));
}
// Обработка изображений
function images() {
    return gulp.src('./src/image/*')
		.pipe(imagemin({
            destination: './dist/images',
            plugins: [
                imageminSvgo(),
                imageminJpegtran(),
                imageminPngquant(),
    ]
        }))
        .pipe(gulp.dest('./dist/images'))
}

function imagesIcon() {
    return gulp.src('./src/image/icon/*')
		.pipe(imagemin({
            destination: './dist/images',
            plugins: [
                imageminSvgo(),
                imageminJpegtran(),
                imageminPngquant(),
            ]
        }))
        .pipe(gulp.dest('./dist/images/icon'))
}
function imagesBg() {
    return gulp.src('./src/image/bg/*')
		.pipe(imagemin({
            destination: './dist/images/bg',
            plugins: [
                imageminSvgo(),
                imageminJpegtran(),
                imageminPngquant(),
            ]
        }))
        .pipe(gulp.dest('./dist/images/bg'))
}
// Очистка папки dist
function cleanDist() {
    return gulp.src('./dist/style.css', {read: false})
    .pipe();
}
gulp.task('static', gulp.parallel(fonts, gulp.series(images, gulp.parallel(imagesIcon, imagesBg))));
gulp.task('clean', cleanDist);
gulp.task('script', scripts);
gulp.task('styles', styles);
