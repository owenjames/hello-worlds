const cowsay = require('cowsay');
function helloWorldTaxi() {
  console.log(cowsay.say({ text: "hello world", f: "taxi" }));
}
module.exports = helloWorldTaxi;
