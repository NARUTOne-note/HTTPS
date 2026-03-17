# websocket

请求头

```bash
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Key: Ia3dQjfWrAug/6qm7mTZOg==
```

响应头

```bash
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: JkE58n3uIigYDMvC+KsBbGZsp1A=
```

Sec-WebSocket-Accept 是对请求带过来的 Sec-WebSocket-Key 处理之后的结果。
`258EAFA5-E914-47DA-95CA-C5AB0DC85B11` 是 websocket 协议的 magic string
