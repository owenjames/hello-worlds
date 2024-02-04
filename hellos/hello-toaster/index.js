const cowsay = require('cowsay');
function helloWorldToaster() {
  console.log(cowsay.say({ text: "hello world", f: "toaster" }));
}
module.exports = helloWorldToaster;
