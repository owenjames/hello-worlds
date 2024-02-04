const cowsay = require('cowsay');
function helloWorldSnoopysleep() {
  console.log(cowsay.say({ text: "hello world", f: "snoopysleep" }));
}
module.exports = helloWorldSnoopysleep;
