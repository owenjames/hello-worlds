const cowsay = require('cowsay');
function helloWorldSpidercow() {
  console.log(cowsay.say({ text: "hello world", f: "spidercow" }));
}
module.exports = helloWorldSpidercow;
