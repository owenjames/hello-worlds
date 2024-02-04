const cowsay = require('cowsay');
function helloWorldHippie() {
  console.log(cowsay.say({ text: "hello world", f: "hippie" }));
}
module.exports = helloWorldHippie;
