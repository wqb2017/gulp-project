/**
 * Created by wangqibiao on 2017/5/26.
 * @ 监听文件
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  runSequence = require('run-sequence');

//获取文件目录目录
var dirObj = require("./way-dir.js");

gulp.task('watch', function() {
  return gulp.watch([
    dirObj.pagesDir+'/**/*.html',
    dirObj.sassDir
  ], function() {
    return runSequence(['build'], ['reload']);
  })
});