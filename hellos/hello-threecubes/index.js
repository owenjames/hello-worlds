const cowsay = require('cowsay');
function helloWorldThreecubes() {
  console.log(cowsay.say({ text: "hello world", f: "threecubes" }));
}
module.exports = helloWorldThreecubes;
