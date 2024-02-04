const cowsay = require('cowsay');
function helloWorldSnoopy() {
  console.log(cowsay.say({ text: "hello world", f: "snoopy" }));
}
module.exports = helloWorldSnoopy;
