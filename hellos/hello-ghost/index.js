const cowsay = require('cowsay');
function helloWorldGhost() {
  console.log(cowsay.say({ text: "hello world", f: "ghost" }));
}
module.exports = helloWorldGhost;
