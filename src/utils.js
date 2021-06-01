import Web3 from 'web3';

const web3 = new Web3();

export function isValid(txHash) {
  return /^((0x|0X)?([A-Fa-f0-9]{64}))$/.test(txHash);
}

export function getBlockNumberByHash(txHash) {
  const url = `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${
    process.env.REACT_APP_API_TOKEN
  }`;

  return fetch(url)
    .then(result => result.json())
    .then(data => {
      if (data.result) return web3.utils.hexToNumber(data.result.blockNumber);
      return data.error;
    });
}

export async function getCurrentBlockNumber() {
  const url =
    'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&sad';

  const result = await fetch(url);
  const data = await result.json();
  return data.result ? web3.utils.hexToNumber(data.result) : null;
}
