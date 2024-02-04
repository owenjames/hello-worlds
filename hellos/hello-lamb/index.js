const cowsay = require('cowsay');
function helloWorldLamb() {
  console.log(cowsay.say({ text: "hello world", f: "lamb" }));
}
module.exports = helloWorldLamb;
