const cowsay = require('cowsay');
function helloWorldWww() {
  console.log(cowsay.say({ text: "hello world", f: "www" }));
}
module.exports = helloWorldWww;
