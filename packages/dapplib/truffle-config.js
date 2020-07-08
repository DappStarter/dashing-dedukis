require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note muscle prosper install forget fresh gesture'; 
let testAccounts = [
"0xb71f58d6a3f57112d495bae5519307422aa292ecf7a1217e2c70bb297dab03ee",
"0xd35b668f749ff9618719092b1b944b1ab4d1bbb66e03baa19dd6f474505505d3",
"0x77f99357f5c10a4cc3230324df16c00c643a748bf9f89d1f084214e623bd95d2",
"0xa83ea0bcce2fd67611ee5835f4e24ea3370c4e07c2e9f4427bcd759372ae4905",
"0xc24020e4354fd62935e9cba305d91d058679e9048373985c27f3545be6b02ca6",
"0xa63d7f8d7b1bcf091b77fa46d02d13661e90549a4e8ee4177e58aacbb67f5d3d",
"0xb6e818c73f66406d777a8bfd6177a8758c2f73f03ad03460e738916c34d3b494",
"0x02a28a7b29b700c9094395340e76f8012df36fcb362aaa01c2b7d4e0687c4db7",
"0xe30e800ccbbc2906bd94536a6946ac130351d749180cae36c9a0a4df1b883588",
"0xfe0a51992e7215b0df5c89d706a439d45406c57e9d14b6e761ab3db85d7e2955"
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
            version: '^0.5.11'
        }
    }
};
