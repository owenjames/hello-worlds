const cowsay = require('cowsay');
function helloWorldHellokitty() {
  console.log(cowsay.say({ text: "hello world", f: "hellokitty" }));
}
module.exports = helloWorldHellokitty;
