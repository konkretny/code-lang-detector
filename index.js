const brain = require("brain.js");

const net = new brain.recurrent.LSTM();

net.train(
  [
    { input: `<?php echo "Hello World"; ?>`, output: " php" },
    { input: `$var="test";`, output: " php" },
    { input: `namespace Symfony`, output: " php" },
    { input: `if(isset($test))`, output: " php" },
    { input: `public getName($var)`, output: " php" },
    { input: `echo 'I like you';`, output: " php" },
    { input: `<script>alert( 'Hello, world!' );</script>`, output: " js" },
    { input: `setTimeout`, output: " js" },
    { input: `console.log()`, output: " js" },
    { input: `const test=1;`, output: " js" },
    { input: `var example;`, output: " js" },
    { input: `numbers.map(Math.sqrt)`, output: " js" },
  ],
  {
    iterations: 500000,
    log: (details) => console.log(details),
  }
);

const codeToCheck = "const numbers = [1, 5, 10, 15]; console.log(1);";
console.log("Should be js ", net.run(codeToCheck));
