/** @format */
import contractABI from "../contract/NFTDegree.json" assert { type: "json" };
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const mintNftServices = async (add_owner, tokenId, nameNft, metadataURI) => {
  try {
    let providerEther = new ethers.getDefaultProvider(process.env.INFURA_PROJECT_ID);
    
    const signer = new ethers.Wallet(
      process.env.PRIVATE_KEY_WALLET,
      providerEther
    );

    const contractNFTs = new ethers.Contract(
      process.env.ADDRESS_CONTRACT,
      contractABI,
      signer
    );

    return await initMint(
      contractNFTs,
      add_owner,
      tokenId,
      nameNft,
      metadataURI
    );
  } catch (error) {
    console.error("mint.services.mintNftServices error: ", error);
  }
};

async function initMint(
  contractNFT,
  add_owner,
  tokenId,
  nameNft,
  metadataURI
) {
  try {
    console.log('add_owner: '+add_owner);
    console.log('tokenId: '+tokenId);
    console.log('nameNft: '+nameNft);
    console.log('metadataURI: '+metadataURI);


    let transaction = await contractNFT.createNFT(
      add_owner,
      9, // TODO: este es un valor incremental, no se puede repetir
      nameNft,
      metadataURI,
    );
    console.log("--------------Se guarda transaccion----------------");
    let tx = transaction;
    console.log("El valor inicial de Tx: ", tx);
    console.log("---------------------------------------------------");
    return tx;
  } catch (error) {
    console.error("mint.services.initMint error: ", error);
  }
}

export default mintNftServices;
