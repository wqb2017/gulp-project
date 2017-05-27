/**
 * Created by wangqibiao on 2017/5/26.
 * @拷贝静态文件
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  minifyHtml = require('gulp-minify-html'),
  uglify = require("gulp-uglify"),//js压缩
  runSequence = require('run-sequence');

//获取文件目录目录
var dirObj = require("./../base/way-dir.js");

gulp.task('js', function () {
  return gulp.src([
    dirObj.pagesDir + '/**/*.js'//pages文件
  ])
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest(dirObj.distDir));
});

gulp.task('files', function () {
  return gulp.src([
    dirObj.pagesDir + '/**/*.{png,jpg,jpeg,gif,ico,css}',//pages文件
    dirObj.publicDir + '/iconfont*/**/*.*',//字体图标
    dirObj.publicDir + '/images*/**/*.*',//图片资源
    dirObj.vendeDir + '/**/*.*'//pages文件
  ])
    .pipe(gulp.dest(dirObj.distDir));
});

gulp.task('html', function () {
  return gulp.src([
    dirObj.pagesDir + '/**/*.html',//pages文件
    dirObj.srcDir + '/index.html'//入口文件
  ])
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest(dirObj.distDir));
});

gulp.task('staticFiles', function (callback) {
  return runSequence(['js', 'files', 'html'], callback);
});