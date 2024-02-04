const cowsay = require('cowsay');
function helloWorldGoat() {
  console.log(cowsay.say({ text: "hello world", f: "goat" }));
}
module.exports = helloWorldGoat;
