const cowsay = require('cowsay');
function helloWorldChessmen() {
  console.log(cowsay.say({ text: "hello world", f: "chessmen" }));
}
module.exports = helloWorldChessmen;
