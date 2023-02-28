const Blockchain = require("./src/blockchain");
const Block = require("./src/block");

//Aquí es donde añado nuevos bloques a la cadena
async function run() {
  const blockchain = await new Blockchain();
  const block1 = new Block({ data: "Block #1 de Rox" });
  const block2 = new Block({ data: "Block #2 de Rox" });
  const block3 = new Block({ data: "Block #3 de Rox" });
  const block4 = new Block({ data: "Block #4 de Rox" });
  
  await blockchain.addBlock(block1);
  await blockchain.addBlock(block2);
  await blockchain.addBlock(block3);
  await blockchain.addBlock(block4);

  blockchain.print();
}

run();