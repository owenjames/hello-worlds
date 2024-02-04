const cowsay = require('cowsay');
function helloWorldSeahorse() {
  console.log(cowsay.say({ text: "hello world", f: "seahorse" }));
}
module.exports = helloWorldSeahorse;
