const cowsay = require('cowsay');
function helloWorldBunny() {
  console.log(cowsay.say({ text: "hello world", f: "bunny" }));
}
module.exports = helloWorldBunny;
