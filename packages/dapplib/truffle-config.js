require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember promote inner arctic olympic sort'; 
let testAccounts = [
"0x80c969b8bac878e7bd024746cd6869581091bdfb196ffea2e07c4b5b75309fe9",
"0x30321d2227b93da05d01ba5f6e39d243fb68ff7075375015dc68e3581f91ab19",
"0x170fa25cf8988a0190449ee775a6e6ce7c5040f1451acb66a0d6a0fe7b68b4b0",
"0x54fc036dab29650948935e6b03f6feaec8e1f2e2d8de77ee74813b8e2adf9ae5",
"0x3323760608ef78c4490673365bb28757565bb0fe2e871a0633d731e14d265f35",
"0x598d48706bebeaf66985dc1e9ed40d6fbc113d3a5f17a1ea157a74b297db5fa0",
"0xe15667a9dbb9ae2b8abeeefa14dccdf1e3ba93677010e5fa5a6a3c4cdfb19296",
"0x575ab3dceb90eae661d99adcc55f0df6a4c6e631bf3eca0f1571593336d8eefe",
"0x9a4080a46d04f2de6f6b5a6d6b7c7a44f25e89093828d3ddf6a50123c4827448",
"0xc2f00e3c61da7868e38cb686b72d801cc5f2612fda3d8825f77227943be04c71"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

