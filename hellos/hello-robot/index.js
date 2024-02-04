const cowsay = require('cowsay');
function helloWorldRobot() {
  console.log(cowsay.say({ text: "hello world", f: "robot" }));
}
module.exports = helloWorldRobot;
