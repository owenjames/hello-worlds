const cowsay = require('cowsay');
function helloWorldKnight() {
  console.log(cowsay.say({ text: "hello world", f: "knight" }));
}
module.exports = helloWorldKnight;
