const cowsay = require('cowsay');
function helloWorldOwl() {
  console.log(cowsay.say({ text: "hello world", f: "owl" }));
}
module.exports = helloWorldOwl;
