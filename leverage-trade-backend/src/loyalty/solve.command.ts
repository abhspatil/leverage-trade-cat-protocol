import { z } from "zod";
import chalk from "chalk";
import { broadcastTx } from "../libs/unisat";
import { solve } from "./solve";

export const solveCommand = async (
  secretInput: string,
  address: string,
  userAddress: string
) => {
  const secretSchema = z.string().min(4);
  const { success: secretSuccess, data: secret } =
    secretSchema.safeParse(secretInput);
  if (!secretSuccess) {
    console.error("Secret is invalid");
    return;
  }

  const utxoAddressSchema = z
    .string()
    .regex(/^[bB]c1[pPqQ][a-zA-Z0-9]{58}$/, "Invalid address format");
  const utxoAddressInput = address;
  const { success: utxoAddressSuccess, data: utxoAddress } =
    utxoAddressSchema.safeParse(utxoAddressInput);
  if (!utxoAddressSuccess) {
    console.error("Utxo address is invalid");
    return;
  }

  try {
    const { txid, txHex } = await solve({ utxoAddress, secret, userAddress });
    console.log(chalk.green(`Transaction ID: ${txid}`));
    console.log(chalk.blue(`Transaction Hex: ${txHex}`));

    const broadcastNow: string = "y";
    if (broadcastNow === "y") {
      console.log("broadcasting solve txn");
      const result = await broadcastTx(txHex);
      if (result.code === 0) {
        console.log(chalk.green(`Broadcasted: ${result.data}`));
      } else {
        console.error(chalk.red(`Broadcast failed, message: ${result.msg}`));
      }
    } else {
      console.log("SOLVE TXN NOT BROADCASTED Bye!");
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
  }
};
