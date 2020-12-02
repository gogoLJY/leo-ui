const { series, src, dest, task } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer'); // 根据设置浏览器版本自动处理浏览器前缀
const cleanCSS = require('gulp-clean-css'); // 压缩css文件，减小文件大小, 并给引用url添加版本号避免缓存

function compileCSS() {
  // 按需引入可以配置成 ../src/styles/components/*.scss
  return src('../src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie > 9'],
      })
    )
    .pipe(cleanCSS())
    .pipe(dest('../lib/styles'));
}

task('default', series(compileCSS));
