# 云服务

- [云服务-前端-搭建](https://mp.weixin.qq.com/s/sHy1oajwy_FDy07sMTFmUA)
- [linux 命令](http://wangchujiang.com/linux-command/)

## 简单命令

- ssh 用户名 @ip，连接服务器的命令。

- cd 绝对路径 / 相对路径，跳转到路径对应的目录下。

- rm 文件名，删除文件。

- rm -rf 目录路径，删除目录以及目录下的所有文件，谨慎操作 !

- rz 上传

- sz 下载

- ls [-a]，查看当前目录下的文件和目录，加-a 参数可以查看所有文件，包括隐藏文件（.开头的文件是隐藏文件，默认是看不见的）。

- ll，查看当前目录下的文件详情，可以文件的权限，遇到没有权限执行的情况下可以使用这个命令查看。

- pwd，查看当前路径的完整路径，不知道自己在哪儿的时候可以使用这个命令查看。

- which 名字，在几个默认位置查找改名字，比如查找pm2安装在哪个地方了。

- mkdir 目录名，创建一个空目录。

- cat 相对 / 绝对文件路径，查看文件的内容，多为查看日志或者其他文本文件。

- cp 文件路径  目标路径，复制一个文件到另外一个地方。

- mv 文件路径  目标路径，移动一个文件到另外一个地方，也可以重命名。

- ps -aux，显示当前进程，有时候需要用这个查看进程是否存活。

- kill -9 进程 id，结束进程，进程 id 就是上一条命令查到的 pid。

- tar -zxvf 文件，解压缩文件。

- tar -zcvf 压缩后的文件 要压缩的文件 / 目录，压缩文件。

- vi 文件路径，使用 vim 进入文件的编辑模式。

- vi 退出文件，按下 esc 键保证退出编辑模式，输入:q或者:q!强制退出。

- vi 编辑，按下i左下角会提示进入编辑模式，然后就是正常的输入文字，再按esc键退出编辑模式。

- vi 保存编辑结果，按下 esc 键保证退出编辑模式，输入:x保存并退出。

## 安装 lrzsz

> 上传、下载

```yum
yum install lrzsz -y
```

## 安装node

- [node 安装](https://segmentfault.com/a/1190000012297511)

首先下载源码到本地：

```linux
wget -c https://nodejs.org/dist/v8.9.1/node-v8.9.1.tar.gz
```

下载完毕，提取 tar 文件：

```linux
tar -zxvf node-v8.9.1.tar.gz
```

进入文件夹：

```linux
cd node-v8.9.1
```

在编译代码之前，还需要在机器上安装一些软件包，使得编译可以正常运行：

```linux
sudo yum install gcc gcc-c++
```

对源代码进行配置：

```linux
./configure
```

进行编译：

```linux
make
```

安装：

```linux
sudo make install
```

安装完成后，可以输入命令 node -v 来检查 Nodejs 是否安装成功：

```linux
$ node -v
v8.9.1         # 如果出现了对应的版本号信息，说明安装成功
```

## nginx

> 类似 node 安装

## git

```linux
yum install git

git --version
```