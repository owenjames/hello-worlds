const cowsay = require('cowsay');
function helloWorldCower() {
  console.log(cowsay.say({ text: "hello world", f: "cower" }));
}
module.exports = helloWorldCower;
