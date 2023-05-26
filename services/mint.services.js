/** @format */
import axios from "axios";
import contractABI from "../contract/NFTDegree.json" assert { type: "json" };
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const mintNftServices = async (add_owner, _tokenId, nameNft, metadataURI) => {
  try {
    console.log("mint.sevices.mintNftServices");
    let providerEther = new ethers.getDefaultProvider(process.env.BLOCKCHAIN, {
      infura: process.env.INFURA_PROJECT_ID,
    });
    console.log("---------------------------------------");
    console.log("instancie blockchain");
    console.log("---------------------------------------");
    const signer = new ethers.Wallet(
      process.env.PRIVATE_KEY_WALLET,
      providerEther
    );
    console.log("Se importa la Wallet");
    console.log("---------------------------------------");
    console.log(signer);
    const contractNFTs = new ethers.Contract(
      process.env.ADDRESS_CONTRACT,
      contractABI.abi,
      signer
    );
    console.log("se intancia el contrato");
    console.log("---------------------------------------");

    console.log("---------------------------------------");
    console.log("Gas limit : ", process.env.GAS_LIMIT);
    console.log("---------------------------------------");
    console.log("Gas Price : ", process.env.GAS);
    console.log("---------------------------------------");
    let responseMint = await initMint(
      contractNFTs,
      add_owner,
      _tokenId,
      nameNft,
      metadataURI
    );
    console.log("Response : ", responseMint);
    console.log("---------------------------------------");
  } catch (error) {
    console.error("mint.services.mintNftServices error: ", error);
  }
};

async function initMint(
  contractNFT,
  add_owner,
  _tokenId,
  nameNft,
  metadataURI
) {
  return new Promise(async (resolve, reject) => {
    console.log("--------------initMint----------------");
    console.log("mint.services.initMint");
    try {
      let infogas = await axios.get(process.env.INFOGAS);
      let gascurrenttemp =
        parseInt(infogas.data.result.FastGasPrice) * process.env.STATICFEE;

      if (gascurrenttemp < 110) gascurrenttemp = 110;

      let gascurrent = gascurrenttemp * 1000000000;

      console.log("mint.services.initMint gascurrenttemp: ", gascurrenttemp);
      console.log("mint.services.initMint gascurrent: ", gascurrent);
      let transaction = await contractNFT.createNFT(
        add_owner,
        _tokenId,
        nameNft,
        metadataURI,
        {
          gasLimit: process.env.GAS_LIMIT,
          gasPrice: gascurrent,
        }
      );
      console.log("--------------Se guarda transaccion----------------");
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
      reject(error);
    }
  });
}

export default mintNftServices;
