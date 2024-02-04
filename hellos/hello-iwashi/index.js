const cowsay = require('cowsay');
function helloWorldIwashi() {
  console.log(cowsay.say({ text: "hello world", f: "iwashi" }));
}
module.exports = helloWorldIwashi;
