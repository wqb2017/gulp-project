/**
 * Created by wangqibiao on 2017/5/26.
 * @拷贝静态文件
 */
var gulp = require('gulp'); //本地安装gulp所用到的地方

//获取文件目录目录
var dirObj = require("./../base/way-dir.js");

gulp.task('staticFiles', function() {
  return gulp.src([
    dirObj.pagesDir + '/**/*.*',//pages文件
    dirObj.publicDir + '/iconfont*/**/*.*',//字体图标
    dirObj.publicDir + '/images*/**/*.*',//图片资源
    dirObj.thirdPartyLibsDir + '/**/*.*',//pages文件
    dirObj.yunyingStandardDir + '/index.html'//入口文件
  ])
    .pipe(gulp.dest(dirObj.distDir));
});