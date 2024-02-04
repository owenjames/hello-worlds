const cowsay = require('cowsay');
function helloWorldExplosion() {
  console.log(cowsay.say({ text: "hello world", f: "explosion" }));
}
module.exports = helloWorldExplosion;
