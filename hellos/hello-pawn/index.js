const cowsay = require('cowsay');
function helloWorldPawn() {
  console.log(cowsay.say({ text: "hello world", f: "pawn" }));
}
module.exports = helloWorldPawn;
