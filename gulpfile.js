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
(async () => {
	await imagemin(['./src/image/*.png'], {
		destination: 'dist/image',
		plugins: [
            imageminPngquant(),
            imageminJpegtran(),
            imageminSvgo()
		]
	});

	console.log('Images optimized!');
})();


gulp.task('styles', styles);
