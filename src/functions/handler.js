"use strict";
const Web3 = require("web3");
const GmpArtifact = require("../config/artifacts");
const provider = "https://goerli.infura.io/v3/2d27254740a24efab547b46022305432";
const contractAddress = "0x46B9B39251E03BA2504355e5FCC46F13b71DBf1f";

module.exports.totalSupply = async (event) => {
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(
    GmpArtifact.abi,
    GmpArtifact.address["5"]
  );

  console.log("Contract initiated successfully!");

  await contract.methods
    .totalSupply()
    .call()
    .then((data) => {
      console.log(data);

      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: data,
            input: event,
          },
          null,
          2
        ),
      };
    });
};
