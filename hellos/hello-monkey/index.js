const cowsay = require('cowsay');

function helloMonkey() {
  const monkeyCow = `
     \\
      \\
          (o)
   ___ --' '.___
 /      '.___. -'
/  |________|
  / ' - _______ - '
 /  /|      |\\  \\
(__( |______| )__)
   '._ _______.'   
       '---'
  `;
  console.log(cowsay.say({ text: "hello world", cow: monkeyCow }));
}

module.exports = helloMonkey;
