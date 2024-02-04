const cowsay = require('cowsay');
function helloWorldNyan() {
  console.log(cowsay.say({ text: "hello world", f: "nyan" }));
}
module.exports = helloWorldNyan;
