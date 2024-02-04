const cowsay = require('cowsay');
function helloWorldRook() {
  console.log(cowsay.say({ text: "hello world", f: "rook" }));
}
module.exports = helloWorldRook;
