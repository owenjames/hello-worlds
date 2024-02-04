const cowsay = require('cowsay');
function helloWorldHiya() {
  console.log(cowsay.say({ text: "hello world", f: "hiya" }));
}
module.exports = helloWorldHiya;
