# jenkins

## [Jenkins](https://jenkins.io/zh/doc/)是什么
- Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。
- Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。

## Linux部署jenkins
- cat /proc/version 查看当前Linux操作系统的版本

- 安装nodejs
  - curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
  - yum install -y nodejs

- 安装jenkins
  - wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo 
  - rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
  - yum install -y jenkins 默认安装最新的
  - 通过 repoquery -ql jenkins 查看有哪些文件

- 安装android sdk
  - wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
  - unzip sdk-tools-linux-4333796.zip
  - mv tools/ android-tools
  - echo "export ANDROID_HOME=/root/mobile_build/android-home" >> /etc/profile
  - echo "export PATH=\$PATH:\$ANDROID_HOME/android-tools:\$ANDROID_HOME/android-tools/bin:\$ANDROID_HOME/platform-tools" >> /etc/profile
  - source /etc/profile

### Jenkins使用
- 在[ind-fnd-jenkins-conf](http://git.inspur.com/ind-fnd/indgroup/ind-fnd-jenkins-conf.git)添加个groovy脚本
- 在web页面建个任务，任务使用上面的脚本

## jenkins打包使用
- 服务地址 http://10.10.10.112:8088
- 用户名密码 indfnd indfnd
- 登录进去之后，目前有四个构建任务，分别为
  - 四川生产apk
  - 四川生产热更新
  - 云南生产apk
  - 云南生产热更新
- 找到要执行的构建任务，点击执行构建按钮
- 等待进度条执行结束，ftp连接到112服务器在/jenkins_build_output/目录找到打包成功的apk或者www热更新目录，传输到本地，10.10.10.112 sftp账号 indfnd 密码indfnd