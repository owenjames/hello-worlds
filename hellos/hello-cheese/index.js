const cowsay = require('cowsay');
function helloWorldCheese() {
  console.log(cowsay.say({ text: "hello world", f: "cheese" }));
}
module.exports = helloWorldCheese;
