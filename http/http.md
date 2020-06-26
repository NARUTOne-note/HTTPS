# Welcome to http

## 参考

- [http简介](https://www.jianshu.com/p/80e25cb1d81a)
- [前端工程师，http](https://segmentfault.com/a/1190000015493580)

## url解析

> 浏览器输入URL后HTTP请求返回过程

![url解析](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/url-http.png)
![三次握手和四次挥手](https://zhuanlan.zhihu.com/p/86426969)

### URI、URL、URN

>URI: Uniform Resource Identifier/统一资源标识符
>URL: Uniform Resource Locator/统一资源定位器
>URN: Uniform Resource Name/永久统一资源定位符

![URI-URL-URN](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/URI-URL-URN.jpg)

- URL是URI的一种，不仅标识了Web 资源，还指定了操作或者获取方式，同时指出了主要访问机制和网络位置。
- URN是URI的一种，用特定命名空间的名字标识资源。使用URN可以在不知道其网络位置及访问方式的情况下讨论资源。

``` js
// 这是一个URI
http://bitpoetry.io/posts/hello.html#intro

// 资源访问方式
http://

// 资源存储位置
bitpoetry.io/posts/hello.html

#intro // 资源

// URL
http://bitpoetry.io/posts/hello.html

// URN
bitpoetry.io/posts/hello.html#intro

```

## 网络协议分层

### OSI七层协议

![OSI七层协议](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/OSI.gif)

### TCP/IP 协议

> TCP(Transmission Control Protocol)传输控制协议
TCP/IP协议将应用层、表示层、会话层合并为应用层，物理层和数据链路层合并为网络接口层

![TCP-IP](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/TCP-IP.png)

## 互联网

![三种模型结构](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/internet.png)
![各层作用](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/internet-use.png)

## http发展史

### HTTP/0.9

- [X] 只有一个命令GET
- [X] 响应类型: 仅 超文本
- [X] 没有header等描述数据的信息
- [X] 服务器发送完毕，就关闭TCP连接

### HTTP/1.0

- [X] 增加了很多命令（post HESD ）
- [X] 增加status code 和 header
- [X] 多字符集支持、多部分发送、权限、缓存等
- [X] 响应：不再只限于超文本 (Content-Type 头部提供了传输 HTML 之外文件的能力 — 如脚本、样式或媒体文件)

### HTTP/1.1

- [X] 持久连接。TCP三次握手会在任何连接被建立之前发生一次。最终，当发送了所有数据之后，服务器发送一个消息，表示不会再有更多数据向客户端发送了；则客户端才会关闭连接（断开 TCP）
- [X] 支持的方法: GET , HEAD , POST , PUT ,DELETE , TRACE , OPTIONS
- [X] 进行了重大的性能优化和特性增强，分块传输、压缩/解压、内容缓存磋商、虚拟主机（有单个IP地址的主机具有多个域名）、更快的响应，以及通过增加缓存节省了更多的带宽

### HTTP2

- [X] 所有数据以二进制传输。HTTP1.x是基于文本的，无法保证健壮性，HTTP2.0绝对使用新的二进制格式，方便且健壮
- [X] 同一个连接里面发送多个请求不再需要按照顺序来
- [X] 头信息压缩以及推送等提高效率的功能

## http, https

![https](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/HTTPS.png)

- 一、https协议需要到ca申请证书，一般免费证书很少，需要交费。
- 二、http是超文本传输协议，信息是明文传输，https 则是具有安全性的ssl加密传输协议。
- 三、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
- 四、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

### http报文

![http报文](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/http/HTTP-web.png)