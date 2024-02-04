const cowsay = require('cowsay');
function helloWorldRoflcopter() {
  console.log(cowsay.say({ text: "hello world", f: "roflcopter" }));
}
module.exports = helloWorldRoflcopter;
