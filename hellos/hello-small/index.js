const cowsay = require('cowsay');
function helloWorldSmall() {
  console.log(cowsay.say({ text: "hello world", f: "small" }));
}
module.exports = helloWorldSmall;
