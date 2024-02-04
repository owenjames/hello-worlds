const cowsay = require('cowsay');
function helloWorldHypno() {
  console.log(cowsay.say({ text: "hello world", f: "hypno" }));
}
module.exports = helloWorldHypno;
