const cowsay = require('cowsay');
function helloWorldKing() {
  console.log(cowsay.say({ text: "hello world", f: "king" }));
}
module.exports = helloWorldKing;
