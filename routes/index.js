/** @format */
import express from "express";
import mintNFT from "./mint-nft.routes.js";
import getNFT from "./get-nft.routes.js";

const router = express.Router();
console.log("index.routes.js");
router.post("/mint", async (req, res) => {
  console.log("routes.index.post");
  const {add_owner, _tokenId, nameNft, metadataURI} = req.body
  const response = await mintNFT(add_owner, _tokenId, nameNft, metadataURI);
  return res.json(response);
});
router.get("/get", async (req, res) => {
  console.log("routes.index.get");
  const response = await getNFT("hola!!!");
  return res.json(response);
});

export default router;
