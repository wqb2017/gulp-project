/**
 * Created by wangqibiao on 2017/5/26.
 * @启动服务
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  browserSync = require('browser-sync').create();

//获取文件目录目录
var dirObj = require("./way-dir.js");

gulp.task('serve', function() {
  browserSync.init({
    server: dirObj.distDir,
    port: 8084
  });
});

gulp.task('reload', function() {
  return browserSync.reload();
});