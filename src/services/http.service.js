import axios from "axios";

export async function getBlock(id="latest"){
  id = id !== "latest" ? '0x' + Number(id).toString(16) : id
  const { data } = await axios.post("https://cloudflare-eth.com", JSON.stringify({
        "jsonrpc":"2.0",
        "method":"eth_getBlockByNumber",
        "params":[`${id}`, true],
        "id":64
    }),{
    headers: {
        "Content-Type": "application/json",
    }
  });
  return data;
}



