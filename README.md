# gulp-project
使用gulp，sass，jQuery，bootstrap开发管理后台项目

# 项目目录结构说明
``` html
|-gulp-project #项目名称
    |-node_modules #gulp依赖文件
    |-gulp-tasks #配置文件
        |-base #公共配置文件
        |-tasks-dev #开发环境
        |-tasks-dist #生产环境
    |-gulpfile.js #gulp打包入口文件
    |-package.json #各种gulp依赖包
    |-READE.md #说明文档
    |-vender #第三方插件
    |-src #业务开发
            |-public #公共内容
                |-components #组件
                |-config #配置文件
                |-iconfont
                |-imgs #公共图片资源
                |-layout #具体布局
                |-sass #sass文件
                |-libs #业务无关库
                |-logic #业务逻辑
            |-pages 具体页面
```
        
# 项目使用
* git close []()https://github.com/wqb2017/gulp-project

# 使用指南
* 确保在node环境中使用

# 全局安装gulp
* npm install gulp --g

# 初始化项目依赖
* npm install

# 运行 gulp
* gulp default

# 常用gulp API介绍
* gulp中最常用的API主要有4个
    1. gulp.src() 匹配文件路径
    2. gulp.dest() 输出文件路径 
    3. gulp.task() 定义任务
    4. gulp.watch() 监视文件变化
* 这里有以上内容的详细说明 []() https://github.com/gulpjs/gulp/blob/master/docs/API.md

# 常用插件介绍 
* js文件压缩 gulp-uglify  
  安装 npm install gulp-uglify --save-dev  
  官网 []()https://www.npmjs.com/package/gulp-uglify
  ```html
  var gulp = require('gulp'),
      uglify = require("gulp-uglify");
  gulp.task('minify-js', function () {
      gulp.src('js/*.js') // 要压缩的js文件
      .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
      .pipe(gulp.dest('dist/js')); //压缩后的路径
  });
  ```
  
* css文件压缩 gulp-minify-css  
  安装 npm install gulp-minify-css --save-dev  
  官网 []()https://www.npmjs.com/package/gulp-minify-css
  ```html
    var gulp = require('gulp'),
        minifyCss = require("gulp-minify-css");
    gulp.task('minify-css', function () {
        gulp.src('css/*.css') // 要压缩的css文件
        .pipe(minifyCss()) //压缩css
        .pipe(gulp.dest('dist/css'));
    });
  ```
  
* html文件压缩 gulp-minify-html  
  安装 npm install gulp-minify-html --save-dev  
  官网 []()https://www.npmjs.com/package/gulp-minify-html
  ```html
    var gulp = require('gulp'),
        minifyHtml = require("gulp-minify-html");
    gulp.task('minify-html', function () {
        gulp.src('html/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/html'));
    });
  ```
  
* js代码检查 gulp-jshint  
  安装 npm install gulp-jshint --save-dev  
  官网 []()https://www.npmjs.com/package/gulp-jshint
  ```html
    var gulp = require('gulp'),
        jshint = require("gulp-jshint");
    gulp.task('jsLint', function () {
        gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter()); // 输出检查结果
    });
  ```
  
* 文件合并 gulp-concat  
  安装 npm install gulp-jshint --save-dev  
  官网 []()https://www.npmjs.com/package/gulp-concat
  ```html
    var gulp = require('gulp'),
        concat = require("gulp-concat");
    gulp.task('concat', function () {
        gulp.src('js/*.js')  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('dist/js'));
    });
  ```
    
* sass的编译 gulp-less  
  安装 npm install gulp-less --save-dev  
  官网 []()https://www.npmjs.com/package/gulp-sass
  ```html
    var gulp = require('gulp'),
        less = require("gulp-less");
    gulp.task('compile-less', function () {
        gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
    });
  ```
    
* 图片压缩 gulp-imagemin 
  安装 npm install gulp-imagemin --save-dev  
  官网 []()https://github.com/sindresorhus/gulp-imagemin
  ```html
    var gulp = require('gulp');
    var imagemin = require('gulp-imagemin');
    var pngquant = require('imagemin-pngquant'); //png图片压缩插件
    gulp.task('default', function () {
        return gulp.src('src/images/*')
            .pipe(imagemin({
                progressive: true,
                use: [pngquant()] //使用pngquant来压缩png图片
            }))
            .pipe(gulp.dest('dist'));
    });
  ```
    
* 自动刷新 browser-sync  
  安装 npm install browser-sync --save-dev   
  官网 https://github.com/BrowserSync/browser-sync
  ```html
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
  ```
    
* 开发定位原文件位置 gulp-sourcemaps 
  安装 npm install gulp-sourcemaps --save-dev   
  官网 https://github.com/gulp-sourcemaps/gulp-sourcemaps
  ```html
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
  ```
    
* 同时运行多个任务 run-sequence
  安装 npm install run-sequence --save-dev   
  官网 https://github.com/OverZealous/run-sequence
  ```html
    var gulp = require('gulp'), //本地安装gulp所用到的地方
      runSequence = require('run-sequence');
    
    gulp.task('build', function(callback) {
      return runSequence(['css','commonjs', 'staticFiles'], callback);
    });
  ```