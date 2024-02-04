const cowsay = require('cowsay');
function helloWorldKosh() {
  console.log(cowsay.say({ text: "hello world", f: "kosh" }));
}
module.exports = helloWorldKosh;
