const cowsay = require('cowsay');
function helloWorldGlados() {
  console.log(cowsay.say({ text: "hello world", f: "glados" }));
}
module.exports = helloWorldGlados;
