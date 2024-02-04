const cowsay = require('cowsay');
function helloWorldKitten() {
  console.log(cowsay.say({ text: "hello world", f: "kitten" }));
}
module.exports = helloWorldKitten;
