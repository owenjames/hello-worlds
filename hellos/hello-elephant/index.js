const cowsay = require('cowsay');
function helloWorldElephant() {
  console.log(cowsay.say({ text: "hello world", f: "elephant" }));
}
module.exports = helloWorldElephant;
