import type { PsbtInput } from "bip174";

import type { TapLeafScript } from "bip174";
// @ts-ignore
import { witnessStackToScriptWitness } from "bitcoinjs-lib/src/psbt/psbtutils";

export const buildFractalphabetFinalizer =
  (tapLeafScript: TapLeafScript, solution: Uint8Array[]) =>
  (
    inputIndex: number,
    _input: PsbtInput,
    _tapLeafHashToFinalize?: Uint8Array
  ) => {
    const scriptSolution = solution;
    const witness = scriptSolution
      .concat(tapLeafScript.script)
      .concat(tapLeafScript.controlBlock);
    return { finalScriptWitness: witnessStackToScriptWitness(witness) };
  };
