const cowsay = require('cowsay');
function helloWorldCube() {
  console.log(cowsay.say({ text: "hello world", f: "cube" }));
}
module.exports = helloWorldCube;
