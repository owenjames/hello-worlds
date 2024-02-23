const cowsay = require('cowsay');
function helloWorldRabbit() {
  console.log(cowsay.say({ text: "hello world", f: "rabbit" }));
}
module.exports = helloWorldRabbit;
