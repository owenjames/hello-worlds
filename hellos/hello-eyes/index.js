const cowsay = require('cowsay');
function helloWorldEyes() {
  console.log(cowsay.say({ text: "hello world", f: "eyes" }));
}
module.exports = helloWorldEyes;
