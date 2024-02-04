const cowsay = require('cowsay');
function helloWorldMoofasa() {
  console.log(cowsay.say({ text: "hello world", f: "moofasa" }));
}
module.exports = helloWorldMoofasa;
