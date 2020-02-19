# cookie

> 由服务器端生成，发送给User-Agent(一般指浏览器)，浏览器将cookie以键值对的形式保存到某个目录下的文本文件内。下次请求该网站时就把cookie发送回服务器。（cookie就是一个小文件，浏览器对其大小一般限制在4k,用来记录一些信息（一般用作标识））

## 背景

> web应用程序是使用Http协议传输数据的，而Http协议是无状态的，一旦数据交换完成就会断开连接，再次交换就要重新建立连接，此时，服务器并不知道该浏览器与自己进行过数据交互（大白话就是 服务器不认识这个浏览器了，即使这个浏览器跟服务器说过话）意味着服务器无法从连接上跟踪会话。

**方式**：

- 使用一些承载用户身份的Http请求首部（在请求头）：
①、有一个字段form(现在不常用：不安全)，里面存放的是E-mail，服务器根据此来识别；
②、使用user-agent字段，该字段记录浏览器的一些信息，可识别浏览器，对识别用户没有太大的帮助。
③、referer,该字段可用来进行网站统计（即从什么链接进入的该网站），也是只能粗略反映出一些信息；
- 根据客户端IP地址（缺点：http请求中没有一个字段能得到ip地址；而且有些网站会动态分配一个ip,不稳定；ip对应的是机器设备，而不是用户）
- 登陆账号密码
- 胖URL（即在已有的url后进行动态扩展拼接）并且能记住用户信息的周期仅为本次（就是说关闭窗口重新打开该页面还是不认识）
- cookie
浏览器在发送请求后，服务器除了正常的响应之外，会在响应头里加入一个set-cookie:id=XXX，浏览器接收之后会存入本地文档（txt）,下次向该服务器发送请求时，会附带此cookie.

## 特点

- 1.需要遵循浏览器的同源策略。（即 两个网站即使根域名相同，端口或者子域名不同，那这两个网站就分别有自己的cookie,而且不能操作彼此的cookie）
- 2.内存大小有限制。（每个浏览器对其个数的限制不相同，每个域名在20~50之间，大小一般都限制在4K）
- 3.在本地可以被更改**（所以不能放置敏感数据）**
- 4.有效期
  - 会话cookie(临时cookie) 关闭窗口就删除
  - 永久cookie：设置有效期

## 使用

> 增删改查 

```js
var manageCookie = {
	setCookie:function(name,value,time){
		document.cookie = name + '=' + value + ';max-age'+time;
		return this;
	},
	removeCookie: function(name){
		this.setCookie(name,'',-1);
		return this;
	},
	getCookie: function(name,callback){  //不考虑同名不同路径的cookie,即默认即使不同路径也不会出现同名的cookie
		//此处利用数组处理    
		var allCookieArr = document.cookie.split('; ');
		for(var i =0;i<allCookieArr.length;i++){
			var itemArr = allCookieArr[i].split('=');
			if(itemArr[0] == name){
				callback({itemArr[0]:itemArr[1]});
				return this;     //参数有一个function是因为return被链式调用占用，而得到值不只是显示，所以设置一个回调函数处理此值
			}
		}
		callback({undefined:undefined});
		return this;
	}
}

```

## 跨域

> 同源策略限制

[cookie 跨域](https://www.haorooms.com/post/kuayu_localstorage_cookie)

### path

表示cookie所在的目录，haorooms.com默认为/，就是根目录。 在同一个服务器上有目录如下：

```js
/post/,/post/id/,/tag/,/tag/haorooms/，/tag/id/
```

现假设一个

cookie1的path为/tag/，
cookie2的path为/tag/id/，

那么tag下的所有页面都可以访问到cookie1，而/tag/和/tag/haorooms/的子页面不能访问cookie2。 这是因为cookie2能让其path路径下的页面访问。

让这个设置的cookie 能被其他目录或者父级的目录访问的方法：

```js
document.cookie = "name = value; path=/";
```

### domain

表示的是cookie所在的域，默认为请求的地址，

如网址为 http://www.haorooms.com/post/long_lianjie_websocket ，那么domain默认为www.haorooms.com。

而跨域访问，

如域A为love.haorooms.com，域B为resource.haorooms.com，

那么在域A生产一个令域A和域B都能访问的cookie就要将该cookie的domain设置为.haorooms.com；

如果要在域A生产一个令域A不能访问而域B能访问的cookie就要将该cookie的domain设置为resource.haorooms.com。

这样，我们就知道为什么www.百度 和yun.baidu共享cookie，我们只需要设置domain为.baidu.com就可以了【注：点好是必须的】

### 业务下cookie跨域传输

- nginx 反向代理
- jsonp
- nodejs superagent
- ajax  
  - 使用jsonp格式发送
  - ajax请求中加上字段 xhrFields: {withCredentials: true}，这样可以携带上cookie
  - 服务器需要配置：Access-Control-Allow-Credentials: true