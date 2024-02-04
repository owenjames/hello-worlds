const cowsay = require('cowsay');
function helloWorldHedgehog() {
  console.log(cowsay.say({ text: "hello world", f: "hedgehog" }));
}
module.exports = helloWorldHedgehog;
