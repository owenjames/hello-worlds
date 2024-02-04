const cowsay = require('cowsay');
function helloWorldMoose() {
  console.log(cowsay.say({ text: "hello world", f: "moose" }));
}
module.exports = helloWorldMoose;
