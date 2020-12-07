const { task } = require('gulp');
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');
const imageminJpegtran = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');
// const imageminGifsicle = require('imagemin-gifsicle');


const cssFiles = ['./src/style/pluses.css',
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


function images() {
    return gulp.src('src/image/*')
		.pipe(imagemin({
            destination: 'dist/images',
            plugins: [
                imageminSvgo(),
                imageminJpegtran(),
                imageminPngquant(),

            ]
        }))
        .pipe(gulp.dest('dist/images'))
}

function imagesIcon() {
    return gulp.src('src/image/icon/*')
		.pipe(imagemin({
            destination: 'dist/images',
            plugins: [
                imageminSvgo(),
                imageminJpegtran(),
                imageminPngquant(),

            ]
        }))
        .pipe(gulp.dest('dist/images/icon'))
}

gulp.task('styles', styles);
gulp.task('images', images);
gulp.task('imagesIcon', imagesIcon);