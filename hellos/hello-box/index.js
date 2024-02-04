const cowsay = require('cowsay');
function helloWorldBox() {
  console.log(cowsay.say({ text: "hello world", f: "box" }));
}
module.exports = helloWorldBox;
