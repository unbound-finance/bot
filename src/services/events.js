import Web3 from "web3";
// import config from "../config";
import Logger from "../loaders/logger";

//import ABI
import DaiWethABI from "../ABIs/daiweth";

export async function getAllEvents() {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/1440aa5db7674113b6a7b68cddedd0aa"
  );
  const contractAddress = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11";
  const daiwethUniContract = new web3.eth.Contract(DaiWethABI, contractAddress);

  const currentBlock = await web3.eth.getBlockNumber();
  let filter = {
    fromBlock: parseInt(currentBlock) - 10,
    toBlock: "latest",
  };
  try {
    const events = await daiwethUniContract.getPastEvents("Mint", filter);

    const result = {
      currentBlock,
      lastTenBlockNumber: currentBlock - 10,
      events,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
}
