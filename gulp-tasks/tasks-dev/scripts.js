/**
 * Created by wangqibiao on 2017/5/26.
 * @合并js并生成公共文件common.js
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require("gulp-uglify");//js压缩

//获取文件目录目录
var dirObj = require("./../base/way-dir.js");

gulp.task('commonjs', function () {
  gulp.src(dirObj.publicDir + '/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('common.js'))//合并后的文件名
    .on('error', function(err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirObj.distDir + '/js'));
});
