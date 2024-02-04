const cowsay = require('cowsay');
function helloWorldLobster() {
  console.log(cowsay.say({ text: "hello world", f: "lobster" }));
}
module.exports = helloWorldLobster;
