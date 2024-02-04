const cowsay = require('cowsay');
function helloWorldSheep() {
  console.log(cowsay.say({ text: "hello world", f: "sheep" }));
}
module.exports = helloWorldSheep;
