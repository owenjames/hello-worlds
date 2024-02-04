const cowsay = require('cowsay');
function helloWorldCake() {
  console.log(cowsay.say({ text: "hello world", f: "cake" }));
}
module.exports = helloWorldCake;
