const cowsay = require('cowsay');
function helloWorldHand() {
  console.log(cowsay.say({ text: "hello world", f: "hand" }));
}
module.exports = helloWorldHand;
