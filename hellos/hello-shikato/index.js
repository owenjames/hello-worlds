const cowsay = require('cowsay');
function helloWorldShikato() {
  console.log(cowsay.say({ text: "hello world", f: "shikato" }));
}
module.exports = helloWorldShikato;
