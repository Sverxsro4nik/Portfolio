const { task } = require('gulp');
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');
const gulpClean = require('gulp-clean');
const gulpFont= require('gulp-fonter');
const imageminJpegtran = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');


const cssFiles = ['./src/style/font.css','./src/style/pluses.css',
                    './src/style/citate.css', 
                    './src/style/skills.css',
                './src/style/works.css',
            './src/style/form.css',
        './src/style/footer.css'];

const jsFiles = [];

// Стили
function styles() {
    return gulp.src(cssFiles)
      .pipe(concatCss("style.css"))
      .pipe(gulp.dest('dist/'));
};
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
// Очистка папки dist
function cleanDist() {
    return gulp.src('./dist/style.css', {read: false})
    .pipe();
}
gulp.task('static', gulp.parallel(fonts, gulp.series(images, imagesIcon)));
gulp.task('clean', cleanDist);
gulp.task('styles', styles);
