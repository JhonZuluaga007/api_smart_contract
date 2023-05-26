/** @format */

import { Router } from "express";
import getNftServices from "../services/get.services.js";

const getNFT = async (params) => {
  console.log("get-nft.routes");
  return await getNftServices(params);
};

export default getNFT;
