import { z } from "zod";
import { DUST_LIMIT, FEE } from "../common/constants";
import { broadcastTx } from "../libs/unisat";
import { deploy } from "./deploy";

export const deployCommand = async (
  secretInput: string,
  amountInput: number
) => {
  const secretSchema = z.string().min(4);
  const { success: secretSuccess, data: secret } =
    secretSchema.safeParse(secretInput);
  if (!secretSuccess) {
    console.error("Secret is invalid");
    return;
  }
  const minAmount = DUST_LIMIT + FEE;
  console.log("amout in input", amountInput);
  const amountSchema = z.coerce.number().min(minAmount);
  const {
    success: amountSuccess,
    data: amount,
    error: amountError,
  } = amountSchema.safeParse(amountInput);
  if (!amountSuccess) {
    console.error(amountError);
    return;
  }
  try {
    const { txid, txHex } = await deploy({ secret, amount });
    console.log(`Transaction ID: ${txid}`);
    console.log(`Transaction Hex: ${txHex}`);

    console.log("broadcasting txn = ");
    const result = await broadcastTx(txHex);
    if (result.code === 0) {
      console.log(`Broadcasted: ${result.data}`);
    } else {
      console.error(`Broadcast failed, message: ${result.msg}`);
    }

    return result;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    return;
  }
};
