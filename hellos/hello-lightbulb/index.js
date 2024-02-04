const cowsay = require('cowsay');
function helloWorldLightbulb() {
  console.log(cowsay.say({ text: "hello world", f: "lightbulb" }));
}
module.exports = helloWorldLightbulb;
