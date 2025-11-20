# http api

http 接口来传输数据，而这种数据传输的方式主要有 5 种：

- **url param**：例如，http://guang.zxg/person/1111
- **url query**：例如，http://guang.zxg/person?name=guang&age=20；非英文的字符和一些特殊字符要经过编码，可以使用 encodeURIComponent 的 api 来编码
- **form-urlencoded**：放在了 body 里，然后指定下 content-type 是 application/x-www-form-urlencoded。也要用 encodeURIComponent 的 api。
- **form-data**：文件上传，用 --------- + 一串数字做为 boundary 分隔符，指定 content type 为 multipart/form-data，然后指定 boundary 也就是分割线。
- **json**：指定content type 为 application/json