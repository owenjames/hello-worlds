const cowsay = require('cowsay');
function helloWorldMinotaur() {
  console.log(cowsay.say({ text: "hello world", f: "minotaur" }));
}
module.exports = helloWorldMinotaur;
