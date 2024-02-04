const cowsay = require('cowsay');
function helloWorldLollerskates() {
  console.log(cowsay.say({ text: "hello world", f: "lollerskates" }));
}
module.exports = helloWorldLollerskates;
