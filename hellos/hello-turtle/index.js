const cowsay = require('cowsay');
function helloWorldTurtle() {
  console.log(cowsay.say({ text: "hello world", f: "turtle" }));
}
module.exports = helloWorldTurtle;
