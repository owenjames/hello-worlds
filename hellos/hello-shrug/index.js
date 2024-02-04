const cowsay = require('cowsay');
function helloWorldShrug() {
  console.log(cowsay.say({ text: "hello world", f: "shrug" }));
}
module.exports = helloWorldShrug;
