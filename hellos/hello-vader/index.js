const cowsay = require('cowsay');
function helloWorldVader() {
  console.log(cowsay.say({ text: "hello world", f: "vader" }));
}
module.exports = helloWorldVader;
