const cowsay = require('cowsay');
function helloWorldSurgery() {
  console.log(cowsay.say({ text: "hello world", f: "surgery" }));
}
module.exports = helloWorldSurgery;
