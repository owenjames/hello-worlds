const cowsay = require('cowsay');
function helloWorldDoge() {
  console.log(cowsay.say({ text: "hello world", f: "doge" }));
}
module.exports = helloWorldDoge;
