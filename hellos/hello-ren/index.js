const cowsay = require('cowsay');
function helloWorldRen() {
  console.log(cowsay.say({ text: "hello world", f: "ren" }));
}
module.exports = helloWorldRen;
