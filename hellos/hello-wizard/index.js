const cowsay = require('cowsay');
function helloWorldWizard() {
  console.log(cowsay.say({ text: "hello world", f: "wizard" }));
}
module.exports = helloWorldWizard;
