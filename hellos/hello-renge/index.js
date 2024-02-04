const cowsay = require('cowsay');
function helloWorldRenge() {
  console.log(cowsay.say({ text: "hello world", f: "renge" }));
}
module.exports = helloWorldRenge;
