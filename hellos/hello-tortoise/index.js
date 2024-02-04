const cowsay = require('cowsay');
function helloWorldTortoise() {
  console.log(cowsay.say({ text: "hello world", f: "tortoise" }));
}
module.exports = helloWorldTortoise;
