/**
 * Created by wangqibiao on 2017/5/26.
 * @合并js并生成公共文件common.js
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  concat = require('gulp-concat'),
  uglify = require("gulp-uglify");//js压缩

//获取文件目录目录
var dirObj = require("./../base/way-dir.js");

gulp.task('commonjs', function () {
  gulp.src(dirObj.publicDir + '/**/*.js')
    .pipe(concat('common.js'))//合并后的文件名
    .on('error', function(err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest(dirObj.distDir + '/js'));
});
