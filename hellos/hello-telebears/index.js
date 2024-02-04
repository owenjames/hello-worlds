const cowsay = require('cowsay');
function helloWorldTelebears() {
  console.log(cowsay.say({ text: "hello world", f: "telebears" }));
}
module.exports = helloWorldTelebears;
