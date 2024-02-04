const cowsay = require('cowsay');
function helloWorldFox() {
  console.log(cowsay.say({ text: "hello world", f: "fox" }));
}
module.exports = helloWorldFox;
