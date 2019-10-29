# cordova-hcp

## app更新
- 每次修改app之后都重新打包app将会是一件很麻烦的事情
- 所以有人做了一个cordova插件，用于app内容更新[wiki](https://github.com/nordnet/cordova-hot-code-push/wiki)

## 热更新使用方式
- config.xml添加`cordova-hot-code-push-plugin`插件
- `npm i cordova-hot-code-push-cli`安装cordova-hcp客户端
- 每次发布www目录程序之前执行`cordova-hcp build`，该指令将针对每个文件生成基于内容的hash
- 发布www目录到apache|Nginx目录

## 热更新机制
- 客户端将对比本地最后一次版本的时间与热更新地址上的chcp.json的时间
- 检测到有新版本，将对比mainfest.json，比较文件差异，下载有差异的文件
- 用最新下载的文件更新本地静态资源，完成更新

## 热更新注意事项
- 选择一款靠谱的ftp传输的工具
