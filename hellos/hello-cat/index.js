const cowsay = require('cowsay');
function helloWorldCat() {
  console.log(cowsay.say({ text: "hello world", f: "cat" }));
}
module.exports = helloWorldCat;
