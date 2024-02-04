const cowsay = require('cowsay');
function helloWorldCat2() {
  console.log(cowsay.say({ text: "hello world", f: "cat2" }));
}
module.exports = helloWorldCat2;
