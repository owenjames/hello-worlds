const cowsay = require('cowsay');
function helloWorldWhale() {
  console.log(cowsay.say({ text: "hello world", f: "whale" }));
}
module.exports = helloWorldWhale;
