const cowsay = require('cowsay');
function helloWorldHomer() {
  console.log(cowsay.say({ text: "hello world", f: "homer" }));
}
module.exports = helloWorldHomer;
