/** @format */

import routes from "./routes/index.js";
import express from "express";
const app = express();
// const ethers = require("ethers");
const port = 3000;
// const contractABI = require("../contract/NFTDegree.json");
// const DEPLOYER_SIGNER_PRIVATE_KEY = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
// const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
// const ADDRESS_CONTRACT = process.env.ADDRESS_CONTRACT;
// const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
// const GAS_LIMIT = process.env.GAS_LIMIT;
// const GAS = process.env.GAS;
// const BLOCKCHAIN = process.env.BLOCKCHAIN;

app.use(express.json());
// app.use(routes);
app.use("/", routes);

app.use((err, request, response, _) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => {
  console.log(`Todo arriba en el puerto: ${port}`);
});
export default app;
// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   mintear('add_owner', '_tokenId', 'nameNft', 'metadataURI')
// })

// async function mintear(addOwner, _tokenId, nameNft, metadataURI) {
//   return new Promise(async (resolve, reject) => {
//     try {
//         console.log('entro------');
//       providerEther = new ethers.getDefaultProvider(BLOCKCHAIN, {
//         infura: INFURA_PROJECT_ID,
//       });
//       console.log('---------------------------------------');
//       console.log("instancie blockchain");
//       console.log('---------------------------------------');
//       const signer = new ethers.Wallet(DEPLOYER_SIGNER_PRIVATE_KEY, providerEther);
//       console.log("Se importa la Wallet");
//       console.log('---------------------------------------');
//       const contractNFTs = new ethers.Contract(ADDRESS_CONTRACT, contractABI, signer);
//       console.log("se intancia el contrato");
//       console.log('---------------------------------------');
//       const statusNft = message.isNfts;
//       console.log("Estado del nfts: ", statusNft);
//       console.log('---------------------------------------');
//       if (!statusNft) {
//         console.log('---------------------------------------');
//         console.log("Gas limit : ", GAS_LIMIT);
//         console.log('---------------------------------------');
//         console.log("Gas Price : ", GAS);
//         console.log('---------------------------------------');
//         let responseMint = await iniciarProcessMint(message.urlMultimedia, contractNFTs);
//         console.log("Valor del proceso del minte: " + responseMint);
//         console.log('---------------------------------------');
//       }
//     } catch (error) {
//       console.log('---------------------------------------');
//       console.log('Error-> api-deathFlowMint006');
//       console.log(error);
//       console.log('---------------------------------------');
//     }
//   });
// }

// async function iniciarProcessMint(urlNft, contractNFTs) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let infogas = await axios.get('https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle');
//       let gascurrenttemp = parseInt(infogas.data.result.FastGasPrice) * 1.25;
//       if (gascurrenttemp < 110)
//         gascurrenttemp = 110;
//       //const amount = ethers.utils.parseUnits(input, decimals)
//       let gascurrent = gascurrenttemp * 1000000000;
//       console.log('gasprice a usar ->' + gascurrent);
//       let transaction = await contractNFTs.mint(urlNft, WALLET_ADDRESS, {
//         gasLimit: GAS_LIMIT,
//         gasPrice: gascurrent,
//       });
//       console.log("--------------se guarda transaccion----------------");
//       tx = transaction;
//       console.log("El valor inicial de Tx: ", tx);
//       console.log("El valor inicial de transaction.hash: ", transaction.hash);
//       console.log("Informacion de transaction: ", transaction);
//       console.log('---------------------------------------------------');
//       let result = {
//         "idTransaction": transaction.hash,
//         "result": "OK",
//       }
//       resolve(result);
//     }
//     catch (e) {
//       console.log('---------------------------------------------------');
//       console.log('Paspost Error-> Error al mintear005');
//       console.log('Paspost Error-> Se encontro un error en el proceso de minteo nombre de la funcion (iniciarProcessMint)');
//       console.log(e);
//       console.log('---------------------------------------------------');
//       reject('FailMint');

//     };
//   });
// }
