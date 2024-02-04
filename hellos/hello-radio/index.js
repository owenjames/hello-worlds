const cowsay = require('cowsay');
function helloWorldRadio() {
  console.log(cowsay.say({ text: "hello world", f: "radio" }));
}
module.exports = helloWorldRadio;
