import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=metis-token,usd-coin&vs_currencies=usd";
    const { data } = await axios.get(url);

    cache["METIS"] = data["metis-token"].usd;
    cache["USDC"] = data["usd-coin"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
