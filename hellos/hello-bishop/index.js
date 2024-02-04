const cowsay = require('cowsay');
function helloWorldBishop() {
  console.log(cowsay.say({ text: "hello world", f: "bishop" }));
}
module.exports = helloWorldBishop;
