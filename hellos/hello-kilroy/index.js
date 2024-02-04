const cowsay = require('cowsay');
function helloWorldKilroy() {
  console.log(cowsay.say({ text: "hello world", f: "kilroy" }));
}
module.exports = helloWorldKilroy;
