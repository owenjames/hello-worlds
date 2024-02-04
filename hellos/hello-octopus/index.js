const cowsay = require('cowsay');
function helloWorldOctopus() {
  console.log(cowsay.say({ text: "hello world", f: "octopus" }));
}
module.exports = helloWorldOctopus;
