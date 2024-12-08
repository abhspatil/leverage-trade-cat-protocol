import axios from "axios"

const axiosInstance = axios.create({ baseURL: "http://localhost:8080" })

export const getAllContracts = async () => {
  try {
    const res = await axiosInstance.get("/v1/allContracts")

    console.log("res = ", res)
    return res.data
  } catch (e) {
    console.log("error getting contracts")
  }
}

export const createGuess = async (payload: {
  word: string
  contractAddress: string
  userAddress: string
  feeRate: number
}) => {
  try {
    const res = await axiosInstance.post(
      "/v1/guess/fractalphabetcontract",
      payload
    )
    console.log("res = ", res.status)
    if (res.status === 200) {
      return true
    }
    return false
  } catch (e) {
    console.log("error creating guess")
    return false
  }
}
