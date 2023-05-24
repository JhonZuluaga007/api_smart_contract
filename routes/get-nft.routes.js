/** @format */

import { Router } from "express";
import getNftServices from "../services/get.services.js";

const getNFT = async (params) => {
  console.log("get-nft.routes");
  return await getNftServices(params);
};
// const getNftRouter = Router();
// getNftRouter.get("/", async (rq, rs) => {
//   console.log("get-nft.routes.js");
//   getNftServices("hola");
// });
export default getNFT;
// export default getNftRouter;
