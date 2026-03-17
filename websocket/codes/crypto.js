const crypto = require('crypto');

function hashKey(key) {
  const sha1 = crypto.createHash('sha1');
  // 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 是 websocket 协议的 magic string
  sha1.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');
  return sha1.digest('base64');
}

module.exports = {
  hashKey,
};