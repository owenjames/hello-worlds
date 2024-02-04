const cowsay = require('cowsay');
function helloWorldSachiko() {
  console.log(cowsay.say({ text: "hello world", f: "sachiko" }));
}
module.exports = helloWorldSachiko;
