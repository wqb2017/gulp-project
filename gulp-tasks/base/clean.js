/**
 * Created by wangqibiao on 2017/5/26.
 * @清除文件内容
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  del = require('del');

//获取文件目录目录
var dirObj = require("./way-dir.js");

gulp.task('clean', function(callback) {
  return del(dirObj.distDir, callback);
});