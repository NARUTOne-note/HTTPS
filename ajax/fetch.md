# fetch API

> 新推出的 Fetch API 就是用来替代 XMLHttpRequest 的，功能类似，更具可扩展性和高效性

`fetch(input[, init])`

- input 一个 URL 或者 Request 对象
- init 可选参数，请求配置（method：请求方法，headers 请求头 body 请求体...）

```js
let submit = async () => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
```

**用 Request 构造一个对象传入 fetch**:

```js
let submit = async () => {
  let _request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(data)
  }

  await fetch(_request)
}
```

**Headers() 构造函数来创建一个自己的 headers 对象**:

```js
let submit = async () => {
  let headers = new Headers({
    'Content-Type': 'application/json'
  })
  headers.append('token', 'xxx')

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers
  })
}
```

## 基本使用

> 要经过两次 Promise.then()，当然我们可以很容易地将其变成 async await 的方式

```js
fetch('https://api.awesomes.cn/repo/top100')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data)
})
```

## async 封装版

```js
let fetchData = async () => {
  let response = await fetch('https://api.awesomes.cn/repo/top100')
  let data = await response.json()
}
```

返回一个Response对象

```json
{
  body: ReadableStream,
  bodyUsed: false,
  headers: Headers,
  ok: true
  redirected: false
  status: 200
  statusText: "OK"
  type: "cors",
  url: "https://api.awesomes.cn/repo/top100"
}
```

- Body.arrayBuffer() 使用 buffer 数组来读取
- Body.blob() 使用 Blob 对象来读取
- Body.formData() 使用 FormData 对来读取
- Body.json() 使用 JSON 对来读取
- Body.text() 使用文本对来读取

不管使用上面哪种读取方式，body 只能被读取一次，然后 bodyUsed 的值都会被修改成 true，表示已被使用，之后就不能再读取了。

```js
let fetchData = async () => {
  let response = await fetch('https://api.awesomes.cn/repo/top100')
  console.log('bodyUsed', response.bodyUsed)
  let data = await response.json()
  console.log('bodyUsed', response.bodyUsed)
  let dataAgain = await response.json()
  console.log('dataAgain', dataAgain)
}

fetchData()

// bodyUsed  false
// bodyUsed  true
// Uncaught (in promise) TypeError: Failed to execute 'json' on 'Response': body stream is locked
```

可以使用`clone()`克隆Response对象，多吃读取；**每个克隆的对象也只能用一次，要实现多次读取就只能是克隆多个出来。**

## 兼容性

除了 IE（非 Edge）目前主流的浏览器都支持 fetch，如果你有更高的兼容性需求，也可以加上 fetch 的 polyfil：https://github.com/github/fetch
