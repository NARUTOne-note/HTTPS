# 文件上传

> 文件上传相比一些 `POST`, `GET` 比较暗箱点，不是那么的明显可以进行定位问题

## multipart/form-data

> 上传是需要定义的 `Context-Type`的[MIME 类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types), 专门对二进制文件进行传输， 二进制传输文件，拥有更快的速度

```bash
Content-type: multipart/form-data, boundary=AaB03x

--AaB03x
content-disposition: form-data; name="field1"
Joe Blow
--AaB03x
content-disposition: form-data; name="pics"; filename="file1.txt"
Content-Type: text/plain

... contents of file1.txt ...
--AaB03x--

```

## 请求端

> 上传文件的一方称为请求端，接受文件一方称为接收方

- 前端(浏览器端)
- 服务端

### 前端（浏览器端）

1、**File**

```html
<form action="http://localhost:7787/files" enctype="multipart/form-data" method="POST">
  <input name="file" type="file" id="file">
  <input type="submit" value="提交">
</form>
```

2、**FormData**

> npm 请求库自动识别`FormData`, 其他参数也通过 `FromData` 进行传输

```html
<input type="file" id="file">
<button id="submit">上传</button>
<script src="https://cdn.bootcss.com/axios/0.19.2/axios.min.js"></script>
<script>
submit.onclick = () => {
  const file = document.getElementById('file').files[0];
  var form = new FormData();
  form.append('file', file);

  // type 1
  axios.post('http://localhost:7787/files', form).then(res => {
      console.log(res.data);
  })
  // type 2
  fetch('http://localhost:7787/files', {
      method: 'POST',
      body: form
  }).then(res => res.json()).tehn(res => {console.log(res)});
  // type3
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:7787/files', true);
  xhr.onload = function () {
    console.log(xhr.responseText);
  };
  xhr.send(form);
}
</script>

```

3、**Blob**

> Blob 对象表示一个不可变、原始数据的类文件对象。

- 直接使用 blob 上传

```js
const json = { hello: "world" };
const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
const form = new FormData();
form.append('file', blob, '1.json');
axios.post('http://localhost:7787/files', form);
```

- 使用 File 对象，再进行一次包装 (兼容性差点)

```js
const json = { hello: "world" };
const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
const file = new File([blob], '1.json');
form.append('file', file);
axios.post('http://localhost:7787/files', form)
```

4、**ArrayBuffer**

> ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区

```js
const bufferArrary = [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,1,1,3,0,0,0,37,219,86,202,0,0,0,6,80,76,84,69,0,0,255,128,128,128,76,108,191,213,0,0,0,9,112,72,89,115,0,0,14,196,0,0,14,196,1,149,43,14,27,0,0,0,10,73,68,65,84,8,153,99,96,0,0,0,2,0,1,244,113,100,166,0,0,0,0,73,69,78,68,174,66,96,130];
const array = Uint8Array.from(bufferArrary);
const blob = new Blob([array], {type: 'image/png'});
const form = new FormData();
form.append('file', blob, '1.png');
axios.post('http://localhost:7787/files', form)
```

5、**Base64**

```js
const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEUAAP+AgIBMbL/VAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==';
const byteCharacters = atob(base64);
const byteNumbers = new Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
  byteNumbers[i] = byteCharacters.charCodeAt(i);
}
const array = Uint8Array.from(byteNumbers);
const blob = new Blob([array], {type: 'image/png'});
const form = new FormData();
form.append('file', blob, '1.png');
axios.post('http://localhost:7787/files', form);

```

### 服务器端 (node)

- Buffer
- Stream/Base64

## 接收端 (node)

- Koa-body
- Formidable
- 原生Node
