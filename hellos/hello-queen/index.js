const cowsay = require('cowsay');
function helloWorldQueen() {
  console.log(cowsay.say({ text: "hello world", f: "queen" }));
}
module.exports = helloWorldQueen;
