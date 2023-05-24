/** @format */
const contractABI = require("../contract/NFTDegree.json");
const mintNftServices = async (add_owner, _tokenId, nameNft, metadataURI) => {
  try {
    console.log("mint.sevices.mintNftServices");
    providerEther = new ethers.getDefaultProvider(process.env.BLOCKCHAIN, {
      infura: process.env.INFURA_PROJECT_ID,
    });
    console.log("---------------------------------------");
    console.log("instancie blockchain");
    console.log("---------------------------------------");
    const signer = new ethers.Wallet(
      process.env.DEPLOYER_SIGNER_PRIVATE_KEY,
      providerEther
    );
    console.log("Se importa la Wallet");
    console.log("---------------------------------------");
    const contractNFTs = new ethers.Contract(
      ADDRESS_CONTRACT,
      contractABI,
      signer
    );
    console.log("se intancia el contrato");
    console.log("---------------------------------------");
    const statusNft = message.isNfts;
    console.log("Estado del nfts: ", statusNft);
    console.log("---------------------------------------");
    if (!statusNft) {
      console.log("---------------------------------------");
      console.log("Gas limit : ", GAS_LIMIT);
      console.log("---------------------------------------");
      console.log("Gas Price : ", GAS);
      console.log("---------------------------------------");
      let responseMint = await initMint(message.urlMultimedia, contractNFTs);
      console.log("Valor del proceso del minte: " + responseMint);
      console.log("---------------------------------------");
    }
  } catch (error) {
    console.error("mint.services.initMint error: ", error);
  }
};

async function initMint(urlNFT, contractNFT) {
  return new Promise(async (resolve, reject) => {
    try {
      let infogas = await axios.get(process.env.INFOGAS);
      let gascurrenttemp =
        parseInt(infogas.data.result.FastGasPrice) * process.env.STATICFEE;

      if (gascurrenttemp < 110) gascurrenttemp = 110;

      let gascurrent = gascurrenttemp * 1000000000;
      let transaction = await contractNFTs.mint(
        urlNft,
        process.env.WALLET_ADDRESS,
        {
          gasLimit: process.env.GAS_LIMIT,
          gasPrice: gascurrent,
        }
      );
      console.log("--------------se guarda transaccion----------------");
      tx = transaction;
      console.log("El valor inicial de Tx: ", tx);
      console.log("El valor inicial de transaction.hash: ", transaction.hash);
      console.log("Informacion de transaction: ", transaction);
      console.log("---------------------------------------------------");
      let result = {
        idTransaction: transaction.hash,
        result: "OK",
      };
      resolve(result);
    } catch (error) {
      console.error("mint.services.initMint error: ", error);
    }
  });
}

export default mintNftServices;
