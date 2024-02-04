const cowsay = require('cowsay');
function helloWorldKoala() {
  console.log(cowsay.say({ text: "hello world", f: "koala" }));
}
module.exports = helloWorldKoala;
