const cowsay = require('cowsay');
function helloWorldDalek() {
  console.log(cowsay.say({ text: "hello world", f: "dalek" }));
}
module.exports = helloWorldDalek;
