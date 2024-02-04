const cowsay = require('cowsay');
function helloWorldClippy() {
  console.log(cowsay.say({ text: "hello world", f: "clippy" }));
}
module.exports = helloWorldClippy;
