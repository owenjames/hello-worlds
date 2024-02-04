const cowsay = require('cowsay');
function helloWorldWood() {
  console.log(cowsay.say({ text: "hello world", f: "wood" }));
}
module.exports = helloWorldWood;
