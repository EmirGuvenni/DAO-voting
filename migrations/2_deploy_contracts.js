require('dotenv').config();

const contract_1 = artifacts.require(process.env.CONTRACT_1_NAME);
const contract_2 = artifacts.require(process.env.CONTRACT_2_NAME);

module.exports = function (deployer) {
  deployer.deploy(
    contract_1,
    process.env.CONTRACT_1_TOKEN_NAME,
    process.env.CONTRACT_1_TOKEN_SYMBOL,
    process.env.CONTRACT_1_TOKEN_SUPPLY
  );
  deployer.deploy(contract_2, process.env.CONTRACT_2_TOKEN_SUPPLY);
};
