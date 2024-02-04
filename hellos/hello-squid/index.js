const cowsay = require('cowsay');
function helloWorldSquid() {
  console.log(cowsay.say({ text: "hello world", f: "squid" }));
}
module.exports = helloWorldSquid;
