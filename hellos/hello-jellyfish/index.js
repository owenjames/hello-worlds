const cowsay = require('cowsay');
function helloWorldJellyfish() {
  console.log(cowsay.say({ text: "hello world", f: "jellyfish" }));
}
module.exports = helloWorldJellyfish;
