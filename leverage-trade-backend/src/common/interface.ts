export interface ICreateFractalphabetContractPayload {
  word: string;
  priceAmountInSats: number;
  feeRate: number;
}

export interface ICreateFractalphabetGuessPayload {
  word: string;
  contractAddress: string;
  userAddress: string;
  feeRate: number;
}
