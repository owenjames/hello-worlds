const cowsay = require('cowsay');
function helloWorldSquirrel() {
  console.log(cowsay.say({ text: "hello world", f: "squirrel" }));
}
module.exports = helloWorldSquirrel;
