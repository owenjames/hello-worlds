const cowsay = require('cowsay');
function helloWorldMilk() {
  console.log(cowsay.say({ text: "hello world", f: "milk" }));
}
module.exports = helloWorldMilk;
