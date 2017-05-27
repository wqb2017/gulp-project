/**
 * Created by wangqibiao on 2017/5/25.
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
  runSequence = require('run-sequence'),
  requireDir = require('require-dir');

requireDir('./gulp-tasks/tasks-dev');//开发环境
// requireDir('./gulp-tasks/tasks-dist');//生产环境
//执行default运行的任务
gulp.task('default', function() {
  return runSequence(['clean'], ['build'], ['serve', 'watch']);
});

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径