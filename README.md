# HTTP

> :rocket: 记录、学习一些服务端的知识技能

## 计算机机器（虚拟机器）相关概念

> 💻 介绍一些机器（虚拟）相关

### 服务器

是作为实体的硬件存在的，一般的服务器都是部署在专有的机房之中，服务器的组成一般与个人用PC机相同，只不过侧重点不同，个人PC机更侧重于娱乐和个人应用，而服务器更加倾向于性能、安全、散热、稳定等指标
一般服务器上会安装诸如linux或者winserver（windows的服务器版本）等系统，并在服务器上安装相应功能的软件，提供不同的服务，比如搭建网站需要
**安装数据库、http服务**等等，划分空间进行存储，http网站服务等。

### 虚拟主机

顾名思义，由于实体服务器需要更高的成本，比如硬件费用，机房租用费用，以及人员维护成本等。为了更好的推广互联网，大的互联网公司推出了虚拟主机的服务，也就是说你不需要硬件、带宽、运维等就可以使用服务器的资源搭建自己的服务，当然低成本的同时性能也会相应的降低。因为一般的虚拟主机都是
**同一台服务器上虚拟出来的系统**以供人们使用，动态修改参数配置。

### 其他

- CPU：**处理器**，类似商店里的营业员，单核一个人，双核2个人，四核4个人

- 显卡：处理图像，类似商店外边的女模特，脸蛋好，长的越精致越贵。**信号转换显示图形**，**独立显卡**个性化设计，娱乐，绘图等

- 内存：类似店铺营业间，越大摆放的商品越多。**暂存区**

- 硬盘：类似店铺的：**仓库**，越大，摆放的越多。**固态硬盘**

**硬盘和内存的区别**，内存是商品展示（数据从硬盘搬到内存暂存），CPU（类似营业员）将内存的数据进行处理，如果缺数据了，就从硬盘搬到内存，顺手将内存暂时不用的数据搬回硬盘（仓库）。在硬盘（仓库）一个区域划出一块地方，用于暂时保存数据（暂时不用或即将要用的），这个区域就叫虚拟内存。

## 服务协议

### http协议

> Hyper Text Transfer Protocol，超文本传输协议, 主要面向网页，基于TCP/IP通信协议

[HTTP协议](https://www.jianshu.com/p/80e25cb1d81a)

http://www.microsoft.com/china/index.htm ，含义如下：

- http:// ：代表超文本传输协议，通知microsoft.com服务器显示Web页，通常不用输入。
- www：代表一个Web（万维网）服务器；
- Microsoft.com/：这是装有网页的服务器的域名，或站点服务器的名称；
- China/：为该服务器上的子目录，就好像我们的文件夹；
- Index.htm：index.htm是文件夹中的一个HTML文件（网页）。

### ftp协议

> File Transfer Protocol,文件传输协议, 主要面向文件

## 前端服务部署

- [前端部署](https://www.jianshu.com/p/f9e4c73b18ec)
- [nginx+nodejs+git](https://juejin.im/post/5a12881a6fb9a044fd115dd4)

### nginx

- [Nginx 容器教程](http://www.ruanyifeng.com/blog/2018/02/nginx-docker.html)

### express

- [express](http://expressjs.com/zh-cn/)

## ajax

- [XMLHttpRequest 规范](https://xhr.spec.whatwg.org/)
- [xhr](http://javascript.ruanyifeng.com/bom/ajax.html)
- [四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)

## 小计

- [url src href link](http://mp.weixin.qq.com/s/cUCTTtesmeqTd52aetdnwQ)
- [浏览器同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [hosts 管理 SwitchHosts](https://github.com/oldj/SwitchHosts/releases)

### fetch

- [传统 Ajax 已死，Fetch 永生](https://github.com/camsong/blog/issues/2)
- [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [前端 fetch 通信](https://ivweb.io/topic/5855f6a873eaa3986e3f8e2f)
- [fetch使用的常见问题及解决办法](http://www.cnblogs.com/wonyun/p/fetch_polyfill_timeout_jsonp_cookie_progress.html)

### axios

- [github axios](https://github.com/axios/axios)
- [axios全攻略](https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/)

### 存储

- [三种前端本地存储方式讲解](http://mp.weixin.qq.com/s/dnobWOywJanknkGQVurEaw)

### 前端服务器test

- [前端如何拥有自己的服务器](http://mp.weixin.qq.com/s/sHy1oajwy_FDy07sMTFmUA)

### 服务渲染

[细说后端模板渲染、客户端渲染、node 中间层、服务器端渲染（ssr）](https://mp.weixin.qq.com/s/Uqd9ho5-iacplojxP59pOw)
