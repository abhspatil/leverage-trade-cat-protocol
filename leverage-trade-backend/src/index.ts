import { deployCommand } from "./loyalty/deploy.command";
import { solveCommand } from "./loyalty/solve.command";
import express from "express";
import { HttpStatusCode } from "axios";
import * as dotenv from "dotenv";
import {
  ICreateFractalphabetContractPayload,
  ICreateFractalphabetGuessPayload,
} from "./common/interface";

dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));

app.get("/v1/healthz", (req, res) => {
  try {
    res.sendStatus(HttpStatusCode.Ok);
  } catch (e) {
    res.sendStatus(HttpStatusCode.InternalServerError);
  }
});

app.post("/v1/create/fractalphabetcontract", async (req, res) => {
  try {
    const payload = req.body as ICreateFractalphabetContractPayload;

    console.log("payload rcv to create contract", payload);
    const contractRes = await deployCommand(
      payload.word,
      payload.priceAmountInSats
    );

    res.json(contractRes);
  } catch (e) {
    console.log("error creating contract", e);
    res.sendStatus(HttpStatusCode.InternalServerError);
  }
});

app.post("/v1/guess/fractalphabetcontract", async (req, res) => {
  try {
    const payload = req.body as ICreateFractalphabetGuessPayload;
    const guessResp = await solveCommand(
      payload.word,
      payload.contractAddress,
      payload.userAddress
    );

    res.json(guessResp);
  } catch (e) {
    console.log("error guessing the fractalphabetcontract", e);
    res.sendStatus(HttpStatusCode.InternalServerError);
  }
});

app.get("/v1/allContracts", (req, res) => {
  try {
    // TODO: store these contracts in DB
    res.json([
      {
        contractAddress:
          "bc1pqmfzkw7w50wmqplxdgu7m7wvc0kc0g2y69kkdr2cnmjp6jz9mc6q6wavdu",
        priceAmountInSats: 20000,
        wordIndex: 0,
      },
    ]);
  } catch (e) {
    console.log("error fetching contracts", e);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(Number(PORT), () => console.log(`App listening on port ${PORT}`));
