const cowsay = require('cowsay');
function helloWorldTurkey() {
  console.log(cowsay.say({ text: "hello world", f: "turkey" }));
}
module.exports = helloWorldTurkey;
