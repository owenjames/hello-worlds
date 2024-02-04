const cowsay = require('cowsay');
function helloWorldKiss() {
  console.log(cowsay.say({ text: "hello world", f: "kiss" }));
}
module.exports = helloWorldKiss;
