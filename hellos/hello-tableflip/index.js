const cowsay = require('cowsay');
function helloWorldTableflip() {
  console.log(cowsay.say({ text: "hello world", f: "tableflip" }));
}
module.exports = helloWorldTableflip;
