const cowsay = require('cowsay');
function helloWorldChito() {
  console.log(cowsay.say({ text: "hello world", f: "chito" }));
}
module.exports = helloWorldChito;
