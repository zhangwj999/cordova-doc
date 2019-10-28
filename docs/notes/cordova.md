## cordova

### cordova是什么
- [cordova官网](https://cordova.apache.org/)
- 一个用于移动端混合开发的打包工具
- Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.

### cordova使用
- `npm install -g cordova`
- `cordova create MyApp`
- `cordova platform add android`
- `cordova run android` 或 `cordova build --release android`

### 配置cordova app
- `<content src="index.html" />`

### 配置android环境
- 安装JDK8.0，配置环境变量
- 安装Android-SDK，配置环境变量
- 安装[Android-studio](https://developer.android.google.cn/studio/)，可选，方便调试

### 配置IOS环境
- 使用Xcode打开cordova目录中的`MyApp/platforms/ios/MyApp.xcodeproj`
- 配置版本号，打包证书等信息
- 点击构建，进行打包，可以运行ios虚拟机进行调试
- 打开safri浏览器，调试cordova（如chrome浏览器的F12，可以监控网络，查看错误）

### 一些特殊的文件夹与配置
- 打包app的图标`MyApp/platforms/android/src/main/res`，目录下放了一系列的尺寸的图标适用各种size的设备
- java源码文件`MyApp/platforms/android/src/main`，有需求可以打包前修改这里的源码
- js源码文件`MyApp/platform-www`，有需求可以打包前修改这里的源码
- 