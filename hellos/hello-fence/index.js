const cowsay = require('cowsay');
function helloWorldFence() {
  console.log(cowsay.say({ text: "hello world", f: "fence" }));
}
module.exports = helloWorldFence;
