const ethers = require("ethers");

module.exports.mintReward = async function () {
  const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL);
  const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC).connect(provider);
  const api3Pool = new ethers.Contract(
    "0xf10952f418da8da5ece292b1b82a20479633f173",
    ["function mintReward()"],
    wallet
  );
  await api3Pool.mintReward();
  return { statusCode: 200, body: JSON.stringify({ message: `Done!` }) };
}
