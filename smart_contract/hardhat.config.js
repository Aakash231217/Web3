//https://eth-ropsten.alchemyapi.io/v2/MM-rV0PdDHo5kMJVV2Mf_Tf5KZhaouHq
require("@nomiclabs/hardhat-waffle");
module.exports = {
    solidity: "0.8.0",
    networks: {
        ropsten: {
            url: "https://eth-ropsten.alchemyapi.io/v2/MM-rV0PdDHo5kMJVV2Mf_Tf5KZhaouHq",
            accounts: [
                "f23bee685b3b2082618dec045301b50e4ca637782d32acddec88b7ef917448e5",
            ],
        },
    },
};