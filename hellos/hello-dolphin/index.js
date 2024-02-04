const cowsay = require('cowsay');
function helloWorldDolphin() {
  console.log(cowsay.say({ text: "hello world", f: "dolphin" }));
}
module.exports = helloWorldDolphin;
