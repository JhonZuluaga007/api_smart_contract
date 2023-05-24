/** @format */

import { Router } from "express";
import mintNftServices from "../services/mint.services.js";

const mintNFT = async (add_owner, _tokenId, nameNft, metadataURI) => {
  console.log("mint-nft.routes");
  return await mintNftServices(add_owner, _tokenId, nameNft, metadataURI);
};

export default mintNFT;
