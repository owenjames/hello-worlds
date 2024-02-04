const cowsay = require('cowsay');
function helloWorldDaemon() {
  console.log(cowsay.say({ text: "hello world", f: "daemon" }));
}
module.exports = helloWorldDaemon;
