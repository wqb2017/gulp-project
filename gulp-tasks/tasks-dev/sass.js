/**
 * Created by wangqibiao on 2017/5/26.
 * @ 编译sass
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  sass = require("gulp-sass"),
  sourcemaps = require('gulp-sourcemaps');

//获取文件目录目录
var dirObj = require("./../base/way-dir.js");

gulp.task('css', function () {
  gulp.src(dirObj.sassDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirObj.distDir + '/css'));
});