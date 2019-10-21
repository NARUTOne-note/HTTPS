# web cache

> [前端缓存](https://zhuanlan.zhihu.com/p/44789005)

- 后端缓存主要集中于“处理”步骤，通过保留数据库连接，存储处理结果等方式缩短处理时间，尽快进入“响应”步骤。当然这不在本文的讨论范围之内。

- 而前端缓存则可以在剩下的两步：“请求”和“响应”中进行。在“请求”步骤中，浏览器也可以通过存储结果的方式直接使用资源，直接省去了发送请求；而“响应”步骤需要浏览器和服务器共同配合，通过减少响应内容来缩短传输时间。

## 按缓存位置分类

> 优先级是：(由上到下寻找，找到即返回；找不到则继续)

- Service Worker
- Memory Cache
- Disk Cache
- 网络请求

### Memory Cache (内存缓存)

> 几乎所有的请求资源 都能进入 memory cache，短期性缓存

- preloader机制：例 `@import css`
- preload机制： 例 `<link rel="preload">`

memory cache 机制保证了一个页面中如果有两个相同的请求 (例如两个 src 相同的 <img>，两个 href 相同的 <link>) 都实际只会被请求最多一次，避免浪费；除了匹配完全相同的 URL 之外，还会比对他们的类型，CORS 中的域名规则等。因此一个作为脚本 (script) 类型被缓存的资源是不能用在图片 (image) 类型的请求中的，即便他们 src 相等。

在从 memory cache 获取缓存内容时，浏览器会忽视例如 max-age=0, no-cache 等头部配置。例如页面上存在几个相同 src 的图片，即便它们可能被设置为不缓存，但依然会从 memory cache 中读取。这是因为 memory cache 只是短期使用，大部分情况生命周期只有一次浏览而已。而 max-age=0 在语义上普遍被解读为“不要在下次浏览时使用”，所以和 memory cache 并不冲突。

但如果站长是真心不想让一个资源进入缓存，就连短期也不行，那就需要使用 no-store。存在这个头部配置的话，即便是 memory cache 也不会存储，自然也不会从中读取了

### Disk Cache (硬盘缓存)

> HTTP cache , 持久性缓存

disk cache 会严格根据 HTTP 头信息中的各类字段来判定哪些资源可以缓存，哪些资源不可以缓存；哪些资源是仍然可用的，哪些资源是过时需要重新请求的

### Service Worker

> 永久性的（cache.delete(resource) 或者容量超过限制，被浏览器全部清空）；开后台直接性操作缓存

## 请求网络

1、根据 Service Worker 中的 handler 决定是否存入 Cache Storage (额外的缓存位置)。
2、根据 HTTP 头部的相关字段(Cache-control, Pragma 等)决定是否存入 disk cache
3、memory cache 保存一份资源 的引用，以备下次使用。

