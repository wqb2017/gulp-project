/**
 * Created by wangqibiao on 2017/5/26.
 * @ 执行build执行的任务
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  return runSequence(['css','commonjs', 'staticFiles'], callback);
});