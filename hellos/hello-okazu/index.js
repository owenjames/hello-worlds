const cowsay = require('cowsay');
function helloWorldOkazu() {
  console.log(cowsay.say({ text: "hello world", f: "okazu" }));
}
module.exports = helloWorldOkazu;
