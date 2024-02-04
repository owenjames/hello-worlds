const cowsay = require('cowsay');
function helloWorldBiohazard() {
  console.log(cowsay.say({ text: "hello world", f: "biohazard" }));
}
module.exports = helloWorldBiohazard;
