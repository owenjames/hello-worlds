const cowsay = require('cowsay');
function helloWorldFire() {
  console.log(cowsay.say({ text: "hello world", f: "fire" }));
}
module.exports = helloWorldFire;
