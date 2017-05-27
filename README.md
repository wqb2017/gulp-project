# gulp-project
使用gulp，sass，jQuery，bootstrap开发管理后台项目

# 项目目录结构说明
``` html
|-web-lease 分时租赁
    |-node_modules gulp依赖文件
    |-gulp-tasks 配置文件
        |-base 公共配置文件
        |-tasks-dev 开发环境
        |-tasks-dist 生产环境
    |-gulpfile.js gulp打包入口文件
    |-package.json 各种gulp依赖包
    |-READE.Md 说明文档
    |-third-party-libs 第三方插件
    |-yunying-standard 开发文件
            |-public 公共内容
                |-components 组件
                |-config 配置文件
                |-iconfont
                |-imgs 公共图片资源
                |-layout 具体布局
                |-sass sass文件
                |-libs 业务无关库
                |-logic 业务逻辑
                
```        
# 项目使用
* svn下载项目
* 安装 nodejs
   说明：gulp是基于nodejs，理所当然需要安装nodejs；
   安装：打开nodejs官网，点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件）。
     然后像安装QQ一样安装它就可以了（安装路径随意）。
* 全局安装gulp
    说明：全局安装gulp目的是为了通过她执行gulp任务；
    安装：命令提示符执行cnpm install gulp -g；
    查看是否正确安装：命令提示符执行gulp -v，出现版本号即为正确安装。
项目安装gulp
    npm install gulp --save-dev
* 下载gulp依赖
    npm install
* 运行项目
    gulp default

