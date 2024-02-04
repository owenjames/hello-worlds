const cowsay = require('cowsay');
function helloWorldCharlie() {
  console.log(cowsay.say({ text: "hello world", f: "charlie" }));
}
module.exports = helloWorldCharlie;
