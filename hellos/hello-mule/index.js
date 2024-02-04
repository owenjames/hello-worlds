const cowsay = require('cowsay');
function helloWorldMule() {
  console.log(cowsay.say({ text: "hello world", f: "mule" }));
}
module.exports = helloWorldMule;
