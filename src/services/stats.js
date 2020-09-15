import Axios from "axios";
import config from "../config";
import Logger from "../loaders/logger";

export default class StatsService {
  async PoolDayData(pair) {
    try {
      let ts = Math.round(new Date().getTime() / 1000);
      let last24hts = ts - 24 * 3600;

      let data = JSON.stringify({
        query: `
            query($date: Int!, $pair: String!){
                mints(orderBy: timestamp, orderDirection: desc, where: {
                    pair: $pair,
                    date: $date
                }){
                    transaction {
                        id
                        timestamp
                      }
                      to
                      amount0
                      amount1
                      amountUSD
                }
            }
        `,
        variables: {
          date: last24hts,
          pair,
        },
      });

      var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      };

      // shoot the post request to uniswapV2
      try {
        const result = await axios(config);
        return result;
      } catch (e) {
        Logger.error(e);
      }
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }
}
