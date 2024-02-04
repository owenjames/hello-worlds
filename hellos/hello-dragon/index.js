const cowsay = require('cowsay');
function helloWorldDragon() {
  console.log(cowsay.say({ text: "hello world", f: "dragon" }));
}
module.exports = helloWorldDragon;
