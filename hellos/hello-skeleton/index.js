const cowsay = require('cowsay');
function helloWorldSkeleton() {
  console.log(cowsay.say({ text: "hello world", f: "skeleton" }));
}
module.exports = helloWorldSkeleton;
