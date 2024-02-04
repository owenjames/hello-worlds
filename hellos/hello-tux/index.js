const cowsay = require('cowsay');
function helloWorldTux() {
  console.log(cowsay.say({ text: "hello world", f: "tux" }));
}
module.exports = helloWorldTux;
