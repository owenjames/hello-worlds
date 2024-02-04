const cowsay = require('cowsay');
function helloWorldThreader() {
  console.log(cowsay.say({ text: "hello world", f: "threader" }));
}
module.exports = helloWorldThreader;
