const cowsay = require('cowsay');
function helloWorldStegosaurus() {
  console.log(cowsay.say({ text: "hello world", f: "stegosaurus" }));
}
module.exports = helloWorldStegosaurus;
