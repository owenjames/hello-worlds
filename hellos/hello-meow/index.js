const cowsay = require('cowsay');
function helloWorldMeow() {
  console.log(cowsay.say({ text: "hello world", f: "meow" }));
}
module.exports = helloWorldMeow;
