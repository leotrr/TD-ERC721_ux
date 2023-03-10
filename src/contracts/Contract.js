export const FakeBAYCABI = { 
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "tokenCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "claimAToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimAToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeBAYC.sol\":\"FakeBAYC\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeBAYC.sol\":{\"keccak256\":\"0x3d07343575ba493ecb3b4314a0fe84c666469ca04493d4fcb45c241388ac198f\",\"urls\":[\"bzz-raw://2d00d9c8e0290cee6e5feb6309aba2d7d3bb6259614e4926474334b234fd5509\",\"dweb:/ipfs/QmPpYJg4W1nZegSaT71EXviLSNzTtEzppzUfEPhToKFMTF\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280601981526020017f46616b6520426f7265642041706520596163687420436c7562000000000000008152506040518060400160405280600581526020017f4642415943000000000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b6200015260201b60201c565b8160069080519060200190620000ae929190620006fc565b508060079080519060200190620000c7929190620006fc565b50620000e06380ac58cd60e01b6200015260201b60201c565b620000f8635b5e139f60e01b6200015260201b60201c565b6200011063780e9d6360e01b6200015260201b60201c565b5050620001226200025b60201b60201c565b6200014c60405180608001604052806051815260200162003182605191396200028360201b60201c565b620007ab565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6200026f33600a546200029f60201b60201c565b600a60008154809291906001019190505550565b80600990805190602001906200029b929190620006fc565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000343576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6200035481620004b360201b60201c565b15620003c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b620003dc60008383620004d760201b60201c565b6200043481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020620004dc60201b62001d731790919060201c565b506200045281836002620004fe60201b62001d8d179092919060201c565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000620004d08260026200053b60201b62001d291790919060201c565b9050919050565b505050565b6000620004f6836000018360001b6200055d60201b60201c565b905092915050565b600062000532846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b620005d760201b60201c565b90509392505050565b600062000555836000018360001b620006b660201b60201c565b905092915050565b6000620005718383620006d960201b60201c565b620005cc578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620005d1565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156200068057846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050620006af565b828560000160018303815481106200069457fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200073f57805160ff191683800117855562000770565b8280016001018555821562000770579182015b828111156200076f57825182559160200191906001019062000752565b5b5090506200077f919062000783565b5090565b620007a891905b80821115620007a45760008160009055506001016200078a565b5090565b90565b6129c780620007bb6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610684578063ba1bcc3414610789578063c87b56dd14610793578063d082e3811461083a578063e985e9c51461085857610121565b80636352211e146104685780636c0360eb146104d657806370a082311461055957806395d89b41146105b1578063a22cb4651461063457610121565b806318160ddd116100f457806318160ddd146102ca57806323b872dd146102e85780632f745c591461035657806342842e0e146103b85780634f6ccce71461042657610121565b806301ffc9a71461012657806306fdde031461018b578063081812fc1461020e578063095ea7b31461027c575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108d4565b604051808215151515815260200191505060405180910390f35b61019361093b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023a6004803603602081101561022457600080fd5b81019080803590602001909291905050506109dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a78565b005b6102d2610bbc565b6040518082815260200191505060405180910390f35b610354600480360360608110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bcd565b005b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c43565b6040518082815260200191505060405180910390f35b610424600480360360608110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9e565b005b6104526004803603602081101561043c57600080fd5b8101908080359060200190929190505050610cbe565b6040518082815260200191505060405180910390f35b6104946004803603602081101561047e57600080fd5b8101908080359060200190929190505050610ce1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104de610d18565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051e578082015181840152602081019050610503565b50505050905090810190601f16801561054b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059b6004803603602081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dba565b6040518082815260200191505060405180910390f35b6105b9610e8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f95780820151818401526020810190506105de565b50505050905090810190601f1680156106265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106826004803603604081101561064a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f31565b005b6107876004803603608081101561069a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070157600080fd5b82018360208201111561071357600080fd5b8035906020019184600183028401116401000000008311171561073557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110e9565b005b610791611161565b005b6107bf600480360360208110156107a957600080fd5b8101908080359060200190929190505050611181565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ff5780820151818401526020810190506107e4565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610842611452565b6040518082815260200191505060405180910390f35b6108ba6004803603604081101561086e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611458565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d35780601f106109a8576101008083540402835291602001916109d3565b820191906000526020600020905b8154815290600101906020018083116109b657829003601f168201915b5050505050905090565b60006109e8826114ec565b610a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128bc602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a8382610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129406021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b29611509565b73ffffffffffffffffffffffffffffffffffffffff161480610b585750610b5781610b52611509565b611458565b5b610bad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061280f6038913960400191505060405180910390fd5b610bb78383611511565b505050565b6000610bc860026115ca565b905090565b610bde610bd8611509565b826115df565b610c33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b610c3e8383836116d3565b505050565b6000610c9682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061191690919063ffffffff16565b905092915050565b610cb9838383604051806020016040528060008152506110e9565b505050565b600080610cd583600261193090919063ffffffff16565b50905080915050919050565b6000610d118260405180606001604052806029815260200161287160299139600261195f9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610db05780601f10610d8557610100808354040283529160200191610db0565b820191906000526020600020905b815481529060010190602001808311610d9357829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612847602a913960400191505060405180910390fd5b610e88600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061197e565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f275780601f10610efc57610100808354040283529160200191610f27565b820191906000526020600020905b815481529060010190602001808311610f0a57829003601f168201915b5050505050905090565b610f39611509565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000610fe7611509565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611094611509565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6110fa6110f4611509565b836115df565b61114f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b61115b84848484611993565b50505050565b61116d33600a54611a05565b600a60008154809291906001019190505550565b606061118c826114ec565b6111e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612911602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561128a5780601f1061125f5761010080835404028352916020019161128a565b820191906000526020600020905b81548152906001019060200180831161126d57829003601f168201915b50505050509050606061129b610d18565b90506000815114156112b157819250505061144d565b6000825111156113825780826040516020018083805190602001908083835b602083106112f357805182526020820191506020810190506020830392506112d0565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106113445780518252602082019150602081019050602083039250611321565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529250505061144d565b8061138c85611bf9565b6040516020018083805190602001908083835b602083106113c2578051825260208201915060208101905060208303925061139f565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061141357805182526020820191506020810190506020830392506113f0565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611502826002611d2990919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661158483610ce1565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006115d882600001611d43565b9050919050565b60006115ea826114ec565b61163f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806127e3602c913960400191505060405180910390fd5b600061164a83610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116b957508373ffffffffffffffffffffffffffffffffffffffff166116a1846109dd565b73ffffffffffffffffffffffffffffffffffffffff16145b806116ca57506116c98185611458565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166116f382610ce1565b73ffffffffffffffffffffffffffffffffffffffff161461175f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128e86029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127996024913960400191505060405180910390fd5b6117f0838383611d54565b6117fb600082611511565b61184c81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d5990919063ffffffff16565b5061189e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b506118b581836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006119258360000183611dc2565b60001c905092915050565b6000806000806119438660000186611e45565b915091508160001c8160001c8090509350935050509250929050565b6000611972846000018460001b84611ede565b60001c90509392505050565b600061198c82600001611fd4565b9050919050565b61199e8484846116d3565b6119aa84848484611fe5565b6119ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127676032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611aa8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611ab1816114ec565b15611b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611b3060008383611d54565b611b8181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b50611b9881836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611c41576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d24565b600082905060005b60008214611c6b578080600101915050600a8281611c6357fe5b049150611c49565b6060816040519080825280601f01601f191660200182016040528015611ca05781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611d1c57600a8481611cc157fe5b0660300160f81b82828060019003935081518110611cdb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611d1457fe5b049350611caf565b819450505050505b919050565b6000611d3b836000018360001b61222a565b905092915050565b600081600001805490509050919050565b505050565b6000611d6b836000018360001b61224d565b905092915050565b6000611d85836000018360001b612335565b905092915050565b6000611db9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6123a5565b90509392505050565b600081836000018054905011611e23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127456022913960400191505060405180910390fd5b826000018281548110611e3257fe5b9060005260206000200154905092915050565b60008082846000018054905011611ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061289a6022913960400191505060405180910390fd5b6000846000018481548110611eb857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611fa5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f6a578082015181840152602081019050611f4f565b50505050905090810190601f168015611f975780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611fb857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006120068473ffffffffffffffffffffffffffffffffffffffff16612481565b6120135760019050612222565b60606121a963150b7a0260e01b612028611509565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120d85780820151818401526020810190506120bd565b50505050905090810190601f1680156121055780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612767603291398773ffffffffffffffffffffffffffffffffffffffff166124949092919063ffffffff16565b905060008180602001905160208110156121c257600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b60008083600101600084815260200190815260200160002054905060008114612329576000600182039050600060018660000180549050039050600086600001828154811061229857fe5b90600052602060002001549050808760000184815481106122b557fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806122ed57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061232f565b60009150505b92915050565b600061234183836124ac565b61239a57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061239f565b600090505b92915050565b600080846001016000858152602001908152602001600020549050600081141561244c5784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061247a565b8285600001600183038154811061245f57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606124a384846000856124cf565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b60608247101561252a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127bd6026913960400191505060405180910390fd5b61253385612481565b6125a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106125f557805182526020820191506020810190506020830392506125d2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612657576040519150601f19603f3d011682016040523d82523d6000602084013e61265c565b606091505b509150915061266c828286612678565b92505050949350505050565b606083156126885782905061273d565b60008351111561269b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127025780820151818401526020810190506126e7565b50505050905090810190601f16801561272f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220a79cadf98578b34c25f2fa3aaf60bb76ea199e53a4242acf8a972ee0dd8775d064736f6c6343000602003368747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d65536a53696e4870506e6d586d73704d6a776958794e367a533445397a63636172694752336a7863615774712f",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610684578063ba1bcc3414610789578063c87b56dd14610793578063d082e3811461083a578063e985e9c51461085857610121565b80636352211e146104685780636c0360eb146104d657806370a082311461055957806395d89b41146105b1578063a22cb4651461063457610121565b806318160ddd116100f457806318160ddd146102ca57806323b872dd146102e85780632f745c591461035657806342842e0e146103b85780634f6ccce71461042657610121565b806301ffc9a71461012657806306fdde031461018b578063081812fc1461020e578063095ea7b31461027c575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108d4565b604051808215151515815260200191505060405180910390f35b61019361093b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023a6004803603602081101561022457600080fd5b81019080803590602001909291905050506109dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a78565b005b6102d2610bbc565b6040518082815260200191505060405180910390f35b610354600480360360608110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bcd565b005b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c43565b6040518082815260200191505060405180910390f35b610424600480360360608110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9e565b005b6104526004803603602081101561043c57600080fd5b8101908080359060200190929190505050610cbe565b6040518082815260200191505060405180910390f35b6104946004803603602081101561047e57600080fd5b8101908080359060200190929190505050610ce1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104de610d18565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051e578082015181840152602081019050610503565b50505050905090810190601f16801561054b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059b6004803603602081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dba565b6040518082815260200191505060405180910390f35b6105b9610e8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f95780820151818401526020810190506105de565b50505050905090810190601f1680156106265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106826004803603604081101561064a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f31565b005b6107876004803603608081101561069a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070157600080fd5b82018360208201111561071357600080fd5b8035906020019184600183028401116401000000008311171561073557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110e9565b005b610791611161565b005b6107bf600480360360208110156107a957600080fd5b8101908080359060200190929190505050611181565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ff5780820151818401526020810190506107e4565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610842611452565b6040518082815260200191505060405180910390f35b6108ba6004803603604081101561086e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611458565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d35780601f106109a8576101008083540402835291602001916109d3565b820191906000526020600020905b8154815290600101906020018083116109b657829003601f168201915b5050505050905090565b60006109e8826114ec565b610a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128bc602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a8382610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129406021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b29611509565b73ffffffffffffffffffffffffffffffffffffffff161480610b585750610b5781610b52611509565b611458565b5b610bad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061280f6038913960400191505060405180910390fd5b610bb78383611511565b505050565b6000610bc860026115ca565b905090565b610bde610bd8611509565b826115df565b610c33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b610c3e8383836116d3565b505050565b6000610c9682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061191690919063ffffffff16565b905092915050565b610cb9838383604051806020016040528060008152506110e9565b505050565b600080610cd583600261193090919063ffffffff16565b50905080915050919050565b6000610d118260405180606001604052806029815260200161287160299139600261195f9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610db05780601f10610d8557610100808354040283529160200191610db0565b820191906000526020600020905b815481529060010190602001808311610d9357829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612847602a913960400191505060405180910390fd5b610e88600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061197e565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f275780601f10610efc57610100808354040283529160200191610f27565b820191906000526020600020905b815481529060010190602001808311610f0a57829003601f168201915b5050505050905090565b610f39611509565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000610fe7611509565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611094611509565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6110fa6110f4611509565b836115df565b61114f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b61115b84848484611993565b50505050565b61116d33600a54611a05565b600a60008154809291906001019190505550565b606061118c826114ec565b6111e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612911602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561128a5780601f1061125f5761010080835404028352916020019161128a565b820191906000526020600020905b81548152906001019060200180831161126d57829003601f168201915b50505050509050606061129b610d18565b90506000815114156112b157819250505061144d565b6000825111156113825780826040516020018083805190602001908083835b602083106112f357805182526020820191506020810190506020830392506112d0565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106113445780518252602082019150602081019050602083039250611321565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529250505061144d565b8061138c85611bf9565b6040516020018083805190602001908083835b602083106113c2578051825260208201915060208101905060208303925061139f565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061141357805182526020820191506020810190506020830392506113f0565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611502826002611d2990919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661158483610ce1565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006115d882600001611d43565b9050919050565b60006115ea826114ec565b61163f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806127e3602c913960400191505060405180910390fd5b600061164a83610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116b957508373ffffffffffffffffffffffffffffffffffffffff166116a1846109dd565b73ffffffffffffffffffffffffffffffffffffffff16145b806116ca57506116c98185611458565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166116f382610ce1565b73ffffffffffffffffffffffffffffffffffffffff161461175f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128e86029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127996024913960400191505060405180910390fd5b6117f0838383611d54565b6117fb600082611511565b61184c81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d5990919063ffffffff16565b5061189e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b506118b581836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006119258360000183611dc2565b60001c905092915050565b6000806000806119438660000186611e45565b915091508160001c8160001c8090509350935050509250929050565b6000611972846000018460001b84611ede565b60001c90509392505050565b600061198c82600001611fd4565b9050919050565b61199e8484846116d3565b6119aa84848484611fe5565b6119ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127676032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611aa8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611ab1816114ec565b15611b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611b3060008383611d54565b611b8181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b50611b9881836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611c41576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d24565b600082905060005b60008214611c6b578080600101915050600a8281611c6357fe5b049150611c49565b6060816040519080825280601f01601f191660200182016040528015611ca05781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611d1c57600a8481611cc157fe5b0660300160f81b82828060019003935081518110611cdb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611d1457fe5b049350611caf565b819450505050505b919050565b6000611d3b836000018360001b61222a565b905092915050565b600081600001805490509050919050565b505050565b6000611d6b836000018360001b61224d565b905092915050565b6000611d85836000018360001b612335565b905092915050565b6000611db9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6123a5565b90509392505050565b600081836000018054905011611e23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127456022913960400191505060405180910390fd5b826000018281548110611e3257fe5b9060005260206000200154905092915050565b60008082846000018054905011611ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061289a6022913960400191505060405180910390fd5b6000846000018481548110611eb857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611fa5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f6a578082015181840152602081019050611f4f565b50505050905090810190601f168015611f975780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611fb857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006120068473ffffffffffffffffffffffffffffffffffffffff16612481565b6120135760019050612222565b60606121a963150b7a0260e01b612028611509565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120d85780820151818401526020810190506120bd565b50505050905090810190601f1680156121055780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612767603291398773ffffffffffffffffffffffffffffffffffffffff166124949092919063ffffffff16565b905060008180602001905160208110156121c257600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b60008083600101600084815260200190815260200160002054905060008114612329576000600182039050600060018660000180549050039050600086600001828154811061229857fe5b90600052602060002001549050808760000184815481106122b557fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806122ed57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061232f565b60009150505b92915050565b600061234183836124ac565b61239a57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061239f565b600090505b92915050565b600080846001016000858152602001908152602001600020549050600081141561244c5784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061247a565b8285600001600183038154811061245f57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606124a384846000856124cf565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b60608247101561252a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127bd6026913960400191505060405180910390fd5b61253385612481565b6125a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106125f557805182526020820191506020810190506020830392506125d2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612657576040519150601f19603f3d011682016040523d82523d6000602084013e61265c565b606091505b509150915061266c828286612678565b92505050949350505050565b606083156126885782905061273d565b60008351111561269b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127025780820151818401526020810190506126e7565b50505050905090810190601f16801561272f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220a79cadf98578b34c25f2fa3aaf60bb76ea199e53a4242acf8a972ee0dd8775d064736f6c63430006020033",
    "sourceMap": "183:419:13:-:0;;;268:224;8:9:-1;5:2;;;30:1;27;20:12;5:2;268:224:13;3577:369:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:0;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:3;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;344:13:13::1;:11;;;:13;;:::i;:::-;367:118;;;;;;;;;;;;;;;;;;:11;;;:118;;:::i;:::-;183:419:::0;;1507:198:0;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;498:102:13:-;538:31;544:10;556:12;;538:5;;;:31;;:::i;:::-;579:12;;:14;;;;;;;;;;;;;498:102::o;14873:98:3:-;14956:8;14945;:19;;;;;;;;;;;;:::i;:::-;;14873:98;:::o;12246:393::-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;;;:16;;:::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;;;:45;;:::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;;;;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;;;;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;;;;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;17010:93::-;;;;:::o;8068:129:11:-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;;;:32;;:::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;;;:64;;:::i;:::-;7132:71;;7027:183;;;;;:::o;7588:149::-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;;;:35;;:::i;:::-;7688:42;;7588:149;;;;:::o;1640:404:11:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;4278:123::-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;183:419:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "183:419:13:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;183:419:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:148:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4517:98:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4517:98:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7222:217:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6766:395;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6766:395:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8086:300;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8086:300:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8452:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6540:169:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4280:175;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4280:175:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5855:95;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5855:95:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4005:218;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4005:218:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4679:102;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4679:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7506:290;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7506:290:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8667:282;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8667:282:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8667:282:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8667:282:3;;;;;;;;;;;;;;;:::i;:::-;;498:102:13;;;:::i;:::-;;4847:776:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4847:776:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4847:776:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;234:27:13;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7862:162:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7862:162:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:148:0;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:3:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;6260:208::-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;8086:300::-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;4280:175::-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;4005:218::-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;4679:102::-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;7506:290::-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;8667:282::-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;498:102:13:-;538:31;544:10;556:12;;538:5;:31::i;:::-;579:12;;:14;;;;;;;;;;;;;498:102::o;4847:776:3:-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5415:33:3;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5573:42:3;;;5559:57;;;;4847:776;;;;:::o;234:27:13:-;;;;:::o;7862:162:3:-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:9:-;651:15;685:10;678:17;;598:104;:::o;16225:189:3:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:10:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:3:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:11:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:10:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:11:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;9811:269:3:-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;12246:393::-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;210:725:12:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:12;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:10:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:3:-;;;;:::o;8365:135:11:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:11:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:10:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6562:36:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:11:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15524:589:3:-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15773:175:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15773:175:3;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15773:175:3;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16029:32:3;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:10:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:11:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:8:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:8:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:8;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:8;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7765:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\";\n\ncontract FakeBAYC is IERC721Metadata, ERC721 {\n    uint256 public tokenCounter;\n\n    constructor() public ERC721(\"Fake Bored Ape Yacht Club\", \"FBAYC\") {\n        claimAToken();\n        _setBaseURI(\n            \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\"\n        );\n    }\n\n    function claimAToken() public {\n        _mint(msg.sender, tokenCounter);\n        tokenCounter++;\n    }\n}\n",
    "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeBAYC.sol",
    "ast": {
      "absolutePath": "project:/contracts/FakeBAYC.sol",
      "exportedSymbols": {
        "FakeBAYC": [
          2931
        ]
      },
      "id": 2932,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 2894,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:13"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 2895,
          "nodeType": "ImportDirective",
          "scope": 2932,
          "sourceUnit": 1317,
          "src": "57:57:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "id": 2896,
          "nodeType": "ImportDirective",
          "scope": 2932,
          "sourceUnit": 1470,
          "src": "115:66:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 2897,
                "name": "IERC721Metadata",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1469,
                "src": "204:15:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC721Metadata_$1469",
                  "typeString": "contract IERC721Metadata"
                }
              },
              "id": 2898,
              "nodeType": "InheritanceSpecifier",
              "src": "204:15:13"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 2899,
                "name": "ERC721",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1316,
                "src": "221:6:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC721_$1316",
                  "typeString": "contract ERC721"
                }
              },
              "id": 2900,
              "nodeType": "InheritanceSpecifier",
              "src": "221:6:13"
            }
          ],
          "contractDependencies": [
            52,
            62,
            1316,
            1419,
            1446,
            1469,
            1793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 2931,
          "linearizedBaseContracts": [
            2931,
            1316,
            1446,
            1469,
            1419,
            52,
            62,
            1793
          ],
          "name": "FakeBAYC",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "d082e381",
              "id": 2902,
              "name": "tokenCounter",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 2931,
              "src": "234:27:13",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2901,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "234:7:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2916,
                "nodeType": "Block",
                "src": "334:158:13",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2909,
                        "name": "claimAToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2930,
                        "src": "344:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 2910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "344:13:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2911,
                    "nodeType": "ExpressionStatement",
                    "src": "344:13:13"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "68747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d65536a53696e4870506e6d586d73704d6a776958794e367a533445397a63636172694752336a7863615774712f",
                          "id": 2913,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "392:83:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a6779c02b709a61351412d1b10b5a3d3d47e42f44d0da0fe897363a74836b32f",
                            "typeString": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\""
                          },
                          "value": "https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_a6779c02b709a61351412d1b10b5a3d3d47e42f44d0da0fe897363a74836b32f",
                            "typeString": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\""
                          }
                        ],
                        "id": 2912,
                        "name": "_setBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1225,
                        "src": "367:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 2914,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "367:118:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2915,
                    "nodeType": "ExpressionStatement",
                    "src": "367:118:13"
                  }
                ]
              },
              "documentation": null,
              "id": 2917,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "46616b6520426f7265642041706520596163687420436c7562",
                      "id": 2905,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "296:27:13",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_977d025a74ed4fc788c5627f670cd58bea79910e225a544b5f8ac1719ba91819",
                        "typeString": "literal_string \"Fake Bored Ape Yacht Club\""
                      },
                      "value": "Fake Bored Ape Yacht Club"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "4642415943",
                      "id": 2906,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "325:7:13",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_b2d7bcca17bdf908cf58183c8e7400f18025af5fe17c039afd81e706f0c167bc",
                        "typeString": "literal_string \"FBAYC\""
                      },
                      "value": "FBAYC"
                    }
                  ],
                  "id": 2907,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2904,
                    "name": "ERC721",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1316,
                    "src": "289:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC721_$1316_$",
                      "typeString": "type(contract ERC721)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "289:44:13"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2903,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "279:2:13"
              },
              "returnParameters": {
                "id": 2908,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "334:0:13"
              },
              "scope": 2931,
              "src": "268:224:13",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2929,
                "nodeType": "Block",
                "src": "528:72:13",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2921,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "544:3:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "544:10:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 2923,
                          "name": "tokenCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2902,
                          "src": "556:12:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 2920,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "538:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2924,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "538:31:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2925,
                    "nodeType": "ExpressionStatement",
                    "src": "538:31:13"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 2927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "579:14:13",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 2926,
                        "name": "tokenCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2902,
                        "src": "579:12:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2928,
                    "nodeType": "ExpressionStatement",
                    "src": "579:14:13"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "ba1bcc34",
              "id": 2930,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "claimAToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2918,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "518:2:13"
              },
              "returnParameters": {
                "id": 2919,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "528:0:13"
              },
              "scope": 2931,
              "src": "498:102:13",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 2932,
          "src": "183:419:13"
        }
      ],
      "src": "32:571:13"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/FakeBAYC.sol",
        "exportedSymbols": {
          "FakeBAYC": [
            2931
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.6",
              ".2"
            ]
          },
          "id": 2894,
          "name": "PragmaDirective",
          "src": "32:23:13"
        },
        {
          "attributes": {
            "SourceUnit": 1317,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "scope": 2932,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 2895,
          "name": "ImportDirective",
          "src": "57:57:13"
        },
        {
          "attributes": {
            "SourceUnit": 1470,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "scope": 2932,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 2896,
          "name": "ImportDirective",
          "src": "115:66:13"
        },
        {
          "attributes": {
            "abstract": false,
            "contractDependencies": [
              52,
              62,
              1316,
              1419,
              1446,
              1469,
              1793
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              2931,
              1316,
              1446,
              1469,
              1419,
              52,
              62,
              1793
            ],
            "name": "FakeBAYC",
            "scope": 2932
          },
          "children": [
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "IERC721Metadata",
                    "referencedDeclaration": 1469,
                    "type": "contract IERC721Metadata"
                  },
                  "id": 2897,
                  "name": "UserDefinedTypeName",
                  "src": "204:15:13"
                }
              ],
              "id": 2898,
              "name": "InheritanceSpecifier",
              "src": "204:15:13"
            },
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "ERC721",
                    "referencedDeclaration": 1316,
                    "type": "contract ERC721"
                  },
                  "id": 2899,
                  "name": "UserDefinedTypeName",
                  "src": "221:6:13"
                }
              ],
              "id": 2900,
              "name": "InheritanceSpecifier",
              "src": "221:6:13"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "d082e381",
                "name": "tokenCounter",
                "overrides": null,
                "scope": 2931,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 2901,
                  "name": "ElementaryTypeName",
                  "src": "234:7:13"
                }
              ],
              "id": 2902,
              "name": "VariableDeclaration",
              "src": "234:27:13"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "name": "",
                "overrides": null,
                "scope": 2931,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2903,
                  "name": "ParameterList",
                  "src": "279:2:13"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2908,
                  "name": "ParameterList",
                  "src": "334:0:13"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 1316,
                        "type": "type(contract ERC721)",
                        "value": "ERC721"
                      },
                      "id": 2904,
                      "name": "Identifier",
                      "src": "289:6:13"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "46616b6520426f7265642041706520596163687420436c7562",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"Fake Bored Ape Yacht Club\"",
                        "value": "Fake Bored Ape Yacht Club"
                      },
                      "id": 2905,
                      "name": "Literal",
                      "src": "296:27:13"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "4642415943",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"FBAYC\"",
                        "value": "FBAYC"
                      },
                      "id": 2906,
                      "name": "Literal",
                      "src": "325:7:13"
                    }
                  ],
                  "id": 2907,
                  "name": "ModifierInvocation",
                  "src": "289:44:13"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "arguments": [
                              null
                            ],
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  null
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2930,
                                "type": "function ()",
                                "value": "claimAToken"
                              },
                              "id": 2909,
                              "name": "Identifier",
                              "src": "344:11:13"
                            }
                          ],
                          "id": 2910,
                          "name": "FunctionCall",
                          "src": "344:13:13"
                        }
                      ],
                      "id": 2911,
                      "name": "ExpressionStatement",
                      "src": "344:13:13"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_a6779c02b709a61351412d1b10b5a3d3d47e42f44d0da0fe897363a74836b32f",
                                    "typeString": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1225,
                                "type": "function (string memory)",
                                "value": "_setBaseURI"
                              },
                              "id": 2912,
                              "name": "Identifier",
                              "src": "367:11:13"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "68747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d65536a53696e4870506e6d586d73704d6a776958794e367a533445397a63636172694752336a7863615774712f",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\"",
                                "value": "https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/"
                              },
                              "id": 2913,
                              "name": "Literal",
                              "src": "392:83:13"
                            }
                          ],
                          "id": 2914,
                          "name": "FunctionCall",
                          "src": "367:118:13"
                        }
                      ],
                      "id": 2915,
                      "name": "ExpressionStatement",
                      "src": "367:118:13"
                    }
                  ],
                  "id": 2916,
                  "name": "Block",
                  "src": "334:158:13"
                }
              ],
              "id": 2917,
              "name": "FunctionDefinition",
              "src": "268:224:13"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "ba1bcc34",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "claimAToken",
                "overrides": null,
                "scope": 2931,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2918,
                  "name": "ParameterList",
                  "src": "518:2:13"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2919,
                  "name": "ParameterList",
                  "src": "528:0:13"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 2920,
                              "name": "Identifier",
                              "src": "538:5:13"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 2921,
                                  "name": "Identifier",
                                  "src": "544:3:13"
                                }
                              ],
                              "id": 2922,
                              "name": "MemberAccess",
                              "src": "544:10:13"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2902,
                                "type": "uint256",
                                "value": "tokenCounter"
                              },
                              "id": 2923,
                              "name": "Identifier",
                              "src": "556:12:13"
                            }
                          ],
                          "id": 2924,
                          "name": "FunctionCall",
                          "src": "538:31:13"
                        }
                      ],
                      "id": 2925,
                      "name": "ExpressionStatement",
                      "src": "538:31:13"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2902,
                                "type": "uint256",
                                "value": "tokenCounter"
                              },
                              "id": 2926,
                              "name": "Identifier",
                              "src": "579:12:13"
                            }
                          ],
                          "id": 2927,
                          "name": "UnaryOperation",
                          "src": "579:14:13"
                        }
                      ],
                      "id": 2928,
                      "name": "ExpressionStatement",
                      "src": "579:14:13"
                    }
                  ],
                  "id": 2929,
                  "name": "Block",
                  "src": "528:72:13"
                }
              ],
              "id": 2930,
              "name": "FunctionDefinition",
              "src": "498:102:13"
            }
          ],
          "id": 2931,
          "name": "ContractDefinition",
          "src": "183:419:13"
        }
      ],
      "id": 2932,
      "name": "SourceUnit",
      "src": "32:571:13"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
    },
    "networks": {
      "11155111": {
        "address": "0x1dA89342716B14602664626CD3482b47D5C2005E"
      }
    },
    "schemaVersion": "3.4.11",
    "updatedAt": "2022-11-25T08:10:38.368Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "baseURI()": {
          "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        }
      }
    },
    "userdoc": {
      "methods": {}
    }
  }
  
  export const FakeNefturiansABI = {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "tokenCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "tokenPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "buyAToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buyAToken\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeNefturians.sol\":\"FakeNefturians\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeNefturians.sol\":{\"keccak256\":\"0xfba706bdd4f19b8fe0dfb99756439db068a456ac52f305de34ec6b7e4963f0e5\",\"urls\":[\"bzz-raw://a7096ef40c0edc97cfb9364f0b200a0119017d7f18fa0b819864a9a6b47a69f4\",\"dweb:/ipfs/QmWn9G5XayJpmMSwxYVHPHR5apYZqs9bczDf8rYpdhYeWo\"]}},\"version\":1}",
    "bytecode": "0x608060405267016345785d8a0000600b553480156200001d57600080fd5b506040518060400160405280600f81526020017f46616b65204e656674757269616e7300000000000000000000000000000000008152506040518060400160405280600481526020017f4e46545200000000000000000000000000000000000000000000000000000000815250620000a26301ffc9a760e01b6200017460201b60201c565b8160069080519060200190620000ba929190620006f6565b508060079080519060200190620000d3929190620006f6565b50620000ec6380ac58cd60e01b6200017460201b60201c565b62000104635b5e139f60e01b6200017460201b60201c565b6200011c63780e9d6360e01b6200017460201b60201c565b50506200013233600a546200027d60201b60201c565b600a600081548092919060010191905055506200016e604051806060016040528060238152602001620032a3602391396200049160201b60201c565b620007a5565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000321576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6200033281620004ad60201b60201c565b15620003a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b620003ba60008383620004d160201b60201c565b6200041281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020620004d660201b62001e9a1790919060201c565b506200043081836002620004f860201b62001eb4179092919060201c565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8060099080519060200190620004a9929190620006f6565b5050565b6000620004ca8260026200053560201b62001e501790919060201c565b9050919050565b505050565b6000620004f0836000018360001b6200055760201b60201c565b905092915050565b60006200052c846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b620005d160201b60201c565b90509392505050565b60006200054f836000018360001b620006b060201b60201c565b905092915050565b60006200056b8383620006d360201b60201c565b620005c6578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620005cb565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156200067a57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050620006a9565b828560000160018303815481106200068e57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200073957805160ff19168380011785556200076a565b828001600101855582156200076a579182015b82811115620007695782518255916020019190600101906200074c565b5b5090506200077991906200077d565b5090565b620007a291905b808211156200079e57600081600090555060010162000784565b5090565b90565b612aee80620007b56000396000f3fe60806040526004361061011f5760003560e01c80636c0360eb116100a0578063a22cb46511610064578063a22cb46514610710578063b88d4fde1461076d578063c87b56dd1461087f578063d082e38114610933578063e985e9c51461095e5761011f565b80636c0360eb1461055657806370a08231146105e65780637ff9b5961461064b57806383d0bfa51461067657806395d89b41146106805761011f565b806323b872dd116100e757806323b872dd146103275780632f745c59146103a257806342842e0e146104115780634f6ccce71461048c5780636352211e146104db5761011f565b806301ffc9a71461012457806306fdde0314610196578063081812fc14610226578063095ea7b3146102a157806318160ddd146102fc575b600080fd5b34801561013057600080fd5b5061017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506109e7565b604051808215151515815260200191505060405180910390f35b3480156101a257600080fd5b506101ab610a4e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023257600080fd5b5061025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610af0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ad57600080fd5b506102fa600480360360408110156102c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b8b565b005b34801561030857600080fd5b50610311610ccf565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b506103a06004803603606081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ce0565b005b3480156103ae57600080fd5b506103fb600480360360408110156103c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d56565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061048a6004803603606081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610db1565b005b34801561049857600080fd5b506104c5600480360360208110156104af57600080fd5b8101908080359060200190929190505050610dd1565b6040518082815260200191505060405180910390f35b3480156104e757600080fd5b50610514600480360360208110156104fe57600080fd5b8101908080359060200190929190505050610df4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056257600080fd5b5061056b610e2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ab578082015181840152602081019050610590565b50505050905090810190601f1680156105d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105f257600080fd5b506106356004803603602081101561060957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ecd565b6040518082815260200191505060405180910390f35b34801561065757600080fd5b50610660610fa2565b6040518082815260200191505060405180910390f35b61067e610fa8565b005b34801561068c57600080fd5b50610695610fd6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106d55780820151818401526020810190506106ba565b50505050905090810190601f1680156107025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561071c57600080fd5b5061076b6004803603604081101561073357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611078565b005b34801561077957600080fd5b5061087d6004803603608081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107f757600080fd5b82018360208201111561080957600080fd5b8035906020019184600183028401116401000000008311171561082b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611230565b005b34801561088b57600080fd5b506108b8600480360360208110156108a257600080fd5b81019080803590602001909291905050506112a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108f85780820151818401526020810190506108dd565b50505050905090810190601f1680156109255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561093f57600080fd5b50610948611579565b6040518082815260200191505060405180910390f35b34801561096a57600080fd5b506109cd6004803603604081101561098157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061157f565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae65780601f10610abb57610100808354040283529160200191610ae6565b820191906000526020600020905b815481529060010190602001808311610ac957829003601f168201915b5050505050905090565b6000610afb82611613565b610b50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129e3602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b9682610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a676021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c3c611630565b73ffffffffffffffffffffffffffffffffffffffff161480610c6b5750610c6a81610c65611630565b61157f565b5b610cc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806129366038913960400191505060405180910390fd5b610cca8383611638565b505050565b6000610cdb60026116f1565b905090565b610cf1610ceb611630565b82611706565b610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b610d518383836117fa565b505050565b6000610da982600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a3d90919063ffffffff16565b905092915050565b610dcc83838360405180602001604052806000815250611230565b505050565b600080610de8836002611a5790919063ffffffff16565b50905080915050919050565b6000610e2482604051806060016040528060298152602001612998602991396002611a869092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061296e602a913960400191505060405180910390fd5b610f9b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611aa5565b9050919050565b600b5481565b600b543411610fb657600080fd5b610fc233600a54611aba565b600a60008154809291906001019190505550565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b5050505050905090565b611080611630565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061112e611630565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111db611630565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61124161123b611630565b83611706565b611296576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b6112a284848484611cae565b50505050565b60606112b382611613565b611308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612a38602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113b15780601f10611386576101008083540402835291602001916113b1565b820191906000526020600020905b81548152906001019060200180831161139457829003601f168201915b5050505050905060606113c2610e2b565b90506000815114156113d8578192505050611574565b6000825111156114a95780826040516020018083805190602001908083835b6020831061141a57805182526020820191506020810190506020830392506113f7565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061146b5780518252602082019150602081019050602083039250611448565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611574565b806114b385611d20565b6040516020018083805190602001908083835b602083106114e957805182526020820191506020810190506020830392506114c6565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061153a5780518252602082019150602081019050602083039250611517565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611629826002611e5090919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166116ab83610df4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006116ff82600001611e6a565b9050919050565b600061171182611613565b611766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061290a602c913960400191505060405180910390fd5b600061177183610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117e057508373ffffffffffffffffffffffffffffffffffffffff166117c884610af0565b73ffffffffffffffffffffffffffffffffffffffff16145b806117f157506117f0818561157f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661181a82610df4565b73ffffffffffffffffffffffffffffffffffffffff1614611886576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612a0f6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561190c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128c06024913960400191505060405180910390fd5b611917838383611e7b565b611922600082611638565b61197381600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e8090919063ffffffff16565b506119c581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b506119dc81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611a4c8360000183611ee9565b60001c905092915050565b600080600080611a6a8660000186611f6c565b915091508160001c8160001c8090509350935050509250929050565b6000611a99846000018460001b84612005565b60001c90509392505050565b6000611ab3826000016120fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611b6681611613565b15611bd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611be560008383611e7b565b611c3681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b50611c4d81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611cb98484846117fa565b611cc58484848461210c565b611d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061288e6032913960400191505060405180910390fd5b50505050565b60606000821415611d68576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611e4b565b600082905060005b60008214611d92578080600101915050600a8281611d8a57fe5b049150611d70565b6060816040519080825280601f01601f191660200182016040528015611dc75781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611e4357600a8481611de857fe5b0660300160f81b82828060019003935081518110611e0257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611e3b57fe5b049350611dd6565b819450505050505b919050565b6000611e62836000018360001b612351565b905092915050565b600081600001805490509050919050565b505050565b6000611e92836000018360001b612374565b905092915050565b6000611eac836000018360001b61245c565b905092915050565b6000611ee0846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6124cc565b90509392505050565b600081836000018054905011611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061286c6022913960400191505060405180910390fd5b826000018281548110611f5957fe5b9060005260206000200154905092915050565b60008082846000018054905011611fce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129c16022913960400191505060405180910390fd5b6000846000018481548110611fdf57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906120cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612091578082015181840152602081019050612076565b50505050905090810190601f1680156120be5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106120df57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b600061212d8473ffffffffffffffffffffffffffffffffffffffff166125a8565b61213a5760019050612349565b60606122d063150b7a0260e01b61214f611630565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156121ff5780820151818401526020810190506121e4565b50505050905090810190601f16801561222c5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405180606001604052806032815260200161288e603291398773ffffffffffffffffffffffffffffffffffffffff166125bb9092919063ffffffff16565b905060008180602001905160208110156122e957600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461245057600060018203905060006001866000018054905003905060008660000182815481106123bf57fe5b90600052602060002001549050808760000184815481106123dc57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061241457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612456565b60009150505b92915050565b600061246883836125d3565b6124c15782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506124c6565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612573578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506125a1565b8285600001600183038154811061258657fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606125ca84846000856125f6565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612651576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806128e46026913960400191505060405180910390fd5b61265a856125a8565b6126cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061271c57805182526020820191506020810190506020830392506126f9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461277e576040519150601f19603f3d011682016040523d82523d6000602084013e612783565b606091505b509150915061279382828661279f565b92505050949350505050565b606083156127af57829050612864565b6000835111156127c25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561282957808201518184015260208101905061280e565b50505050905090810190601f1680156128565780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220ffdaf2b008928984c394dd84be5740aeee564c2f2c7a33e66d69ae54f669d5c464736f6c6343000602003368747470733a2f2f6170692e6e656674757269616e732e696f2f6d657461646174612f",
    "deployedBytecode": "0x60806040526004361061011f5760003560e01c80636c0360eb116100a0578063a22cb46511610064578063a22cb46514610710578063b88d4fde1461076d578063c87b56dd1461087f578063d082e38114610933578063e985e9c51461095e5761011f565b80636c0360eb1461055657806370a08231146105e65780637ff9b5961461064b57806383d0bfa51461067657806395d89b41146106805761011f565b806323b872dd116100e757806323b872dd146103275780632f745c59146103a257806342842e0e146104115780634f6ccce71461048c5780636352211e146104db5761011f565b806301ffc9a71461012457806306fdde0314610196578063081812fc14610226578063095ea7b3146102a157806318160ddd146102fc575b600080fd5b34801561013057600080fd5b5061017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506109e7565b604051808215151515815260200191505060405180910390f35b3480156101a257600080fd5b506101ab610a4e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023257600080fd5b5061025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610af0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ad57600080fd5b506102fa600480360360408110156102c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b8b565b005b34801561030857600080fd5b50610311610ccf565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b506103a06004803603606081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ce0565b005b3480156103ae57600080fd5b506103fb600480360360408110156103c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d56565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061048a6004803603606081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610db1565b005b34801561049857600080fd5b506104c5600480360360208110156104af57600080fd5b8101908080359060200190929190505050610dd1565b6040518082815260200191505060405180910390f35b3480156104e757600080fd5b50610514600480360360208110156104fe57600080fd5b8101908080359060200190929190505050610df4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056257600080fd5b5061056b610e2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ab578082015181840152602081019050610590565b50505050905090810190601f1680156105d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105f257600080fd5b506106356004803603602081101561060957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ecd565b6040518082815260200191505060405180910390f35b34801561065757600080fd5b50610660610fa2565b6040518082815260200191505060405180910390f35b61067e610fa8565b005b34801561068c57600080fd5b50610695610fd6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106d55780820151818401526020810190506106ba565b50505050905090810190601f1680156107025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561071c57600080fd5b5061076b6004803603604081101561073357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611078565b005b34801561077957600080fd5b5061087d6004803603608081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107f757600080fd5b82018360208201111561080957600080fd5b8035906020019184600183028401116401000000008311171561082b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611230565b005b34801561088b57600080fd5b506108b8600480360360208110156108a257600080fd5b81019080803590602001909291905050506112a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108f85780820151818401526020810190506108dd565b50505050905090810190601f1680156109255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561093f57600080fd5b50610948611579565b6040518082815260200191505060405180910390f35b34801561096a57600080fd5b506109cd6004803603604081101561098157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061157f565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae65780601f10610abb57610100808354040283529160200191610ae6565b820191906000526020600020905b815481529060010190602001808311610ac957829003601f168201915b5050505050905090565b6000610afb82611613565b610b50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129e3602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b9682610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a676021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c3c611630565b73ffffffffffffffffffffffffffffffffffffffff161480610c6b5750610c6a81610c65611630565b61157f565b5b610cc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806129366038913960400191505060405180910390fd5b610cca8383611638565b505050565b6000610cdb60026116f1565b905090565b610cf1610ceb611630565b82611706565b610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b610d518383836117fa565b505050565b6000610da982600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a3d90919063ffffffff16565b905092915050565b610dcc83838360405180602001604052806000815250611230565b505050565b600080610de8836002611a5790919063ffffffff16565b50905080915050919050565b6000610e2482604051806060016040528060298152602001612998602991396002611a869092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061296e602a913960400191505060405180910390fd5b610f9b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611aa5565b9050919050565b600b5481565b600b543411610fb657600080fd5b610fc233600a54611aba565b600a60008154809291906001019190505550565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b5050505050905090565b611080611630565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061112e611630565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111db611630565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61124161123b611630565b83611706565b611296576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b6112a284848484611cae565b50505050565b60606112b382611613565b611308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612a38602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113b15780601f10611386576101008083540402835291602001916113b1565b820191906000526020600020905b81548152906001019060200180831161139457829003601f168201915b5050505050905060606113c2610e2b565b90506000815114156113d8578192505050611574565b6000825111156114a95780826040516020018083805190602001908083835b6020831061141a57805182526020820191506020810190506020830392506113f7565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061146b5780518252602082019150602081019050602083039250611448565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611574565b806114b385611d20565b6040516020018083805190602001908083835b602083106114e957805182526020820191506020810190506020830392506114c6565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061153a5780518252602082019150602081019050602083039250611517565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611629826002611e5090919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166116ab83610df4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006116ff82600001611e6a565b9050919050565b600061171182611613565b611766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061290a602c913960400191505060405180910390fd5b600061177183610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117e057508373ffffffffffffffffffffffffffffffffffffffff166117c884610af0565b73ffffffffffffffffffffffffffffffffffffffff16145b806117f157506117f0818561157f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661181a82610df4565b73ffffffffffffffffffffffffffffffffffffffff1614611886576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612a0f6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561190c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128c06024913960400191505060405180910390fd5b611917838383611e7b565b611922600082611638565b61197381600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e8090919063ffffffff16565b506119c581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b506119dc81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611a4c8360000183611ee9565b60001c905092915050565b600080600080611a6a8660000186611f6c565b915091508160001c8160001c8090509350935050509250929050565b6000611a99846000018460001b84612005565b60001c90509392505050565b6000611ab3826000016120fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611b6681611613565b15611bd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611be560008383611e7b565b611c3681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b50611c4d81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611cb98484846117fa565b611cc58484848461210c565b611d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061288e6032913960400191505060405180910390fd5b50505050565b60606000821415611d68576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611e4b565b600082905060005b60008214611d92578080600101915050600a8281611d8a57fe5b049150611d70565b6060816040519080825280601f01601f191660200182016040528015611dc75781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611e4357600a8481611de857fe5b0660300160f81b82828060019003935081518110611e0257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611e3b57fe5b049350611dd6565b819450505050505b919050565b6000611e62836000018360001b612351565b905092915050565b600081600001805490509050919050565b505050565b6000611e92836000018360001b612374565b905092915050565b6000611eac836000018360001b61245c565b905092915050565b6000611ee0846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6124cc565b90509392505050565b600081836000018054905011611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061286c6022913960400191505060405180910390fd5b826000018281548110611f5957fe5b9060005260206000200154905092915050565b60008082846000018054905011611fce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129c16022913960400191505060405180910390fd5b6000846000018481548110611fdf57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906120cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612091578082015181840152602081019050612076565b50505050905090810190601f1680156120be5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106120df57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b600061212d8473ffffffffffffffffffffffffffffffffffffffff166125a8565b61213a5760019050612349565b60606122d063150b7a0260e01b61214f611630565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156121ff5780820151818401526020810190506121e4565b50505050905090810190601f16801561222c5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405180606001604052806032815260200161288e603291398773ffffffffffffffffffffffffffffffffffffffff166125bb9092919063ffffffff16565b905060008180602001905160208110156122e957600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461245057600060018203905060006001866000018054905003905060008660000182815481106123bf57fe5b90600052602060002001549050808760000184815481106123dc57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061241457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612456565b60009150505b92915050565b600061246883836125d3565b6124c15782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506124c6565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612573578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506125a1565b8285600001600183038154811061258657fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606125ca84846000856125f6565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612651576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806128e46026913960400191505060405180910390fd5b61265a856125a8565b6126cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061271c57805182526020820191506020810190506020830392506126f9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461277e576040519150601f19603f3d011682016040523d82523d6000602084013e612783565b606091505b509150915061279382828661279f565b92505050949350505050565b606083156127af57829050612864565b6000835111156127c25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561282957808201518184015260208101905061280e565b50505050905090810190601f1680156128565780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220ffdaf2b008928984c394dd84be5740aeee564c2f2c7a33e66d69ae54f669d5c464736f6c63430006020033",
    "sourceMap": "183:487:16:-:0;;;301:18;273:46;;326:187;8:9:-1;5:2;;;30:1;27;20:12;5:2;326:187:16;3577:369:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:0;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:3;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;391:31:16::1;397:10;409:12;;391:5;;;:31;;:::i;:::-;432:12;;:14;;;;;;;;;;;;;456:50;;;;;;;;;;;;;;;;;;:11;;;:50;;:::i;:::-;183:487:::0;;1507:198:0;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;12246:393:3:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;;;:16;;:::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;;;:45;;:::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;;;;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;;;;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;14873:98::-;14956:8;14945;:19;;;;;;;;;;;;:::i;:::-;;14873:98;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;;;;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;17010:93::-;;;;:::o;8068:129:11:-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;;;:32;;:::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;;;:64;;:::i;:::-;7132:71;;7027:183;;;;;:::o;7588:149::-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;;;:35;;:::i;:::-;7688:42;;7588:149;;;;:::o;1640:404:11:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;4278:123::-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;183:487:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "183:487:16:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;965:148:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:148:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4517:98:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4517:98:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4517:98:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7222:217:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7222:217:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6766:395;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6766:395:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6766:395:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6260:208:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8086:300;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8086:300:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8086:300:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6029:160:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8452:149:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8452:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6540:169:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6540:169:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4280:175;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4280:175:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4280:175:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5855:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5855:95:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5855:95:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4005:218;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4005:218:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4005:218:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;273:46:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;273:46:16;;;:::i;:::-;;;;;;;;;;;;;;;;;;;519:149;;;:::i;:::-;;4679:102:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4679:102:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4679:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7506:290;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7506:290:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7506:290:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8667:282;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8667:282:3;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8667:282:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8667:282:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8667:282:3;;;;;;;;;;;;;;;:::i;:::-;;4847:776;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4847:776:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4847:776:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4847:776:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;240:27:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;240:27:16;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7862:162:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7862:162:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7862:162:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:148:0;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:3:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;6260:208::-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;8086:300::-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;4280:175::-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;4005:218::-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;273:46:16:-;;;;:::o;519:149::-;585:10;;573:9;:22;565:31;;;;;;606;612:10;624:12;;606:5;:31::i;:::-;647:12;;:14;;;;;;;;;;;;;519:149::o;4679:102:3:-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;7506:290::-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;8667:282::-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;4847:776::-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5415:33:3;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5573:42:3;;;5559:57;;;;4847:776;;;;:::o;240:27:16:-;;;;:::o;7862:162:3:-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:9:-;651:15;685:10;678:17;;598:104;:::o;16225:189:3:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:10:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:3:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:11:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:10:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:11:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;12246:393:3:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;9811:269::-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;210:725:12:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:12;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:10:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:3:-;;;;:::o;8365:135:11:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:11:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:10:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6562:36:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:11:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15524:589:3:-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15773:175:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15773:175:3;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15773:175:3;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16029:32:3;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:10:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:11:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:8:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:8:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:8;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:8;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7765:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\";\n\ncontract FakeNefturians is IERC721Metadata, ERC721 {\n    uint256 public tokenCounter;\n    uint256 public tokenPrice = 100000000000000000;\n\n    constructor() public ERC721(\"Fake Nefturians\", \"NFTR\") {\n        _mint(msg.sender, tokenCounter);\n        tokenCounter++;\n        _setBaseURI(\"https://api.nefturians.io/metadata/\");\n    }\n\n    function buyAToken() public payable {\n        require(msg.value > tokenPrice);\n        _mint(msg.sender, tokenCounter);\n        tokenCounter++;\n    }\n}\n",
    "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeNefturians.sol",
    "ast": {
      "absolutePath": "project:/contracts/FakeNefturians.sol",
      "exportedSymbols": {
        "FakeNefturians": [
          3353
        ]
      },
      "id": 3354,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 3300,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:16"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 3301,
          "nodeType": "ImportDirective",
          "scope": 3354,
          "sourceUnit": 1317,
          "src": "57:57:16",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "id": 3302,
          "nodeType": "ImportDirective",
          "scope": 3354,
          "sourceUnit": 1470,
          "src": "115:66:16",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 3303,
                "name": "IERC721Metadata",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1469,
                "src": "210:15:16",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC721Metadata_$1469",
                  "typeString": "contract IERC721Metadata"
                }
              },
              "id": 3304,
              "nodeType": "InheritanceSpecifier",
              "src": "210:15:16"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 3305,
                "name": "ERC721",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1316,
                "src": "227:6:16",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC721_$1316",
                  "typeString": "contract ERC721"
                }
              },
              "id": 3306,
              "nodeType": "InheritanceSpecifier",
              "src": "227:6:16"
            }
          ],
          "contractDependencies": [
            52,
            62,
            1316,
            1419,
            1446,
            1469,
            1793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 3353,
          "linearizedBaseContracts": [
            3353,
            1316,
            1446,
            1469,
            1419,
            52,
            62,
            1793
          ],
          "name": "FakeNefturians",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "d082e381",
              "id": 3308,
              "name": "tokenCounter",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3353,
              "src": "240:27:16",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3307,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "240:7:16",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "7ff9b596",
              "id": 3311,
              "name": "tokenPrice",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3353,
              "src": "273:46:16",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3309,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "273:7:16",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "313030303030303030303030303030303030",
                "id": 3310,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "301:18:16",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000000000000_by_1",
                  "typeString": "int_const 100000000000000000"
                },
                "value": "100000000000000000"
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 3331,
                "nodeType": "Block",
                "src": "381:132:16",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3319,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "397:3:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "397:10:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 3321,
                          "name": "tokenCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3308,
                          "src": "409:12:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 3318,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "391:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 3322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "391:31:16",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3323,
                    "nodeType": "ExpressionStatement",
                    "src": "391:31:16"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "432:14:16",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 3324,
                        "name": "tokenCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3308,
                        "src": "432:12:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3326,
                    "nodeType": "ExpressionStatement",
                    "src": "432:14:16"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "68747470733a2f2f6170692e6e656674757269616e732e696f2f6d657461646174612f",
                          "id": 3328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "468:37:16",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_02b02e9674aa175290e3d27c73085ccd60057241bc577f81661fd56ae5cff832",
                            "typeString": "literal_string \"https://api.nefturians.io/metadata/\""
                          },
                          "value": "https://api.nefturians.io/metadata/"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_02b02e9674aa175290e3d27c73085ccd60057241bc577f81661fd56ae5cff832",
                            "typeString": "literal_string \"https://api.nefturians.io/metadata/\""
                          }
                        ],
                        "id": 3327,
                        "name": "_setBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1225,
                        "src": "456:11:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 3329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "456:50:16",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3330,
                    "nodeType": "ExpressionStatement",
                    "src": "456:50:16"
                  }
                ]
              },
              "documentation": null,
              "id": 3332,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "46616b65204e656674757269616e73",
                      "id": 3314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "354:17:16",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_326fabbb4dc152f855a5a039e89e0a91db113b95185ed5b99b063e72ecf514da",
                        "typeString": "literal_string \"Fake Nefturians\""
                      },
                      "value": "Fake Nefturians"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "4e465452",
                      "id": 3315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "373:6:16",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_2f29bcfeef818b8da7473bbb6223914bf04be9ace0094e2aba30b49987907af3",
                        "typeString": "literal_string \"NFTR\""
                      },
                      "value": "NFTR"
                    }
                  ],
                  "id": 3316,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 3313,
                    "name": "ERC721",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1316,
                    "src": "347:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC721_$1316_$",
                      "typeString": "type(contract ERC721)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "347:33:16"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3312,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "337:2:16"
              },
              "returnParameters": {
                "id": 3317,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "381:0:16"
              },
              "scope": 3353,
              "src": "326:187:16",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3351,
                "nodeType": "Block",
                "src": "555:113:16",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3339,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3336,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "573:3:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3337,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "573:9:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 3338,
                            "name": "tokenPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3311,
                            "src": "585:10:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "573:22:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 3335,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "565:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 3340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "565:31:16",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3341,
                    "nodeType": "ExpressionStatement",
                    "src": "565:31:16"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3343,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "612:3:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "612:10:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 3345,
                          "name": "tokenCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3308,
                          "src": "624:12:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 3342,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "606:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 3346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "606:31:16",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3347,
                    "nodeType": "ExpressionStatement",
                    "src": "606:31:16"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "647:14:16",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 3348,
                        "name": "tokenCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3308,
                        "src": "647:12:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3350,
                    "nodeType": "ExpressionStatement",
                    "src": "647:14:16"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "83d0bfa5",
              "id": 3352,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "buyAToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3333,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "537:2:16"
              },
              "returnParameters": {
                "id": 3334,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "555:0:16"
              },
              "scope": 3353,
              "src": "519:149:16",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 3354,
          "src": "183:487:16"
        }
      ],
      "src": "32:639:16"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/FakeNefturians.sol",
        "exportedSymbols": {
          "FakeNefturians": [
            3353
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.6",
              ".2"
            ]
          },
          "id": 3300,
          "name": "PragmaDirective",
          "src": "32:23:16"
        },
        {
          "attributes": {
            "SourceUnit": 1317,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "scope": 3354,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 3301,
          "name": "ImportDirective",
          "src": "57:57:16"
        },
        {
          "attributes": {
            "SourceUnit": 1470,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "scope": 3354,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 3302,
          "name": "ImportDirective",
          "src": "115:66:16"
        },
        {
          "attributes": {
            "abstract": false,
            "contractDependencies": [
              52,
              62,
              1316,
              1419,
              1446,
              1469,
              1793
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              3353,
              1316,
              1446,
              1469,
              1419,
              52,
              62,
              1793
            ],
            "name": "FakeNefturians",
            "scope": 3354
          },
          "children": [
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "IERC721Metadata",
                    "referencedDeclaration": 1469,
                    "type": "contract IERC721Metadata"
                  },
                  "id": 3303,
                  "name": "UserDefinedTypeName",
                  "src": "210:15:16"
                }
              ],
              "id": 3304,
              "name": "InheritanceSpecifier",
              "src": "210:15:16"
            },
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "ERC721",
                    "referencedDeclaration": 1316,
                    "type": "contract ERC721"
                  },
                  "id": 3305,
                  "name": "UserDefinedTypeName",
                  "src": "227:6:16"
                }
              ],
              "id": 3306,
              "name": "InheritanceSpecifier",
              "src": "227:6:16"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "d082e381",
                "name": "tokenCounter",
                "overrides": null,
                "scope": 3353,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 3307,
                  "name": "ElementaryTypeName",
                  "src": "240:7:16"
                }
              ],
              "id": 3308,
              "name": "VariableDeclaration",
              "src": "240:27:16"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "7ff9b596",
                "name": "tokenPrice",
                "overrides": null,
                "scope": 3353,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 3309,
                  "name": "ElementaryTypeName",
                  "src": "273:7:16"
                },
                {
                  "attributes": {
                    "argumentTypes": null,
                    "hexvalue": "313030303030303030303030303030303030",
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "subdenomination": null,
                    "token": "number",
                    "type": "int_const 100000000000000000",
                    "value": "100000000000000000"
                  },
                  "id": 3310,
                  "name": "Literal",
                  "src": "301:18:16"
                }
              ],
              "id": 3311,
              "name": "VariableDeclaration",
              "src": "273:46:16"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "name": "",
                "overrides": null,
                "scope": 3353,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3312,
                  "name": "ParameterList",
                  "src": "337:2:16"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3317,
                  "name": "ParameterList",
                  "src": "381:0:16"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 1316,
                        "type": "type(contract ERC721)",
                        "value": "ERC721"
                      },
                      "id": 3313,
                      "name": "Identifier",
                      "src": "347:6:16"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "46616b65204e656674757269616e73",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"Fake Nefturians\"",
                        "value": "Fake Nefturians"
                      },
                      "id": 3314,
                      "name": "Literal",
                      "src": "354:17:16"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "4e465452",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"NFTR\"",
                        "value": "NFTR"
                      },
                      "id": 3315,
                      "name": "Literal",
                      "src": "373:6:16"
                    }
                  ],
                  "id": 3316,
                  "name": "ModifierInvocation",
                  "src": "347:33:16"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 3318,
                              "name": "Identifier",
                              "src": "391:5:16"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3319,
                                  "name": "Identifier",
                                  "src": "397:3:16"
                                }
                              ],
                              "id": 3320,
                              "name": "MemberAccess",
                              "src": "397:10:16"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3308,
                                "type": "uint256",
                                "value": "tokenCounter"
                              },
                              "id": 3321,
                              "name": "Identifier",
                              "src": "409:12:16"
                            }
                          ],
                          "id": 3322,
                          "name": "FunctionCall",
                          "src": "391:31:16"
                        }
                      ],
                      "id": 3323,
                      "name": "ExpressionStatement",
                      "src": "391:31:16"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3308,
                                "type": "uint256",
                                "value": "tokenCounter"
                              },
                              "id": 3324,
                              "name": "Identifier",
                              "src": "432:12:16"
                            }
                          ],
                          "id": 3325,
                          "name": "UnaryOperation",
                          "src": "432:14:16"
                        }
                      ],
                      "id": 3326,
                      "name": "ExpressionStatement",
                      "src": "432:14:16"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_02b02e9674aa175290e3d27c73085ccd60057241bc577f81661fd56ae5cff832",
                                    "typeString": "literal_string \"https://api.nefturians.io/metadata/\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1225,
                                "type": "function (string memory)",
                                "value": "_setBaseURI"
                              },
                              "id": 3327,
                              "name": "Identifier",
                              "src": "456:11:16"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "68747470733a2f2f6170692e6e656674757269616e732e696f2f6d657461646174612f",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"https://api.nefturians.io/metadata/\"",
                                "value": "https://api.nefturians.io/metadata/"
                              },
                              "id": 3328,
                              "name": "Literal",
                              "src": "468:37:16"
                            }
                          ],
                          "id": 3329,
                          "name": "FunctionCall",
                          "src": "456:50:16"
                        }
                      ],
                      "id": 3330,
                      "name": "ExpressionStatement",
                      "src": "456:50:16"
                    }
                  ],
                  "id": 3331,
                  "name": "Block",
                  "src": "381:132:16"
                }
              ],
              "id": 3332,
              "name": "FunctionDefinition",
              "src": "326:187:16"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "83d0bfa5",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "buyAToken",
                "overrides": null,
                "scope": 3353,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3333,
                  "name": "ParameterList",
                  "src": "537:2:16"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3334,
                  "name": "ParameterList",
                  "src": "555:0:16"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool) pure",
                                "value": "require"
                              },
                              "id": 3335,
                              "name": "Identifier",
                              "src": "565:7:16"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "value",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3336,
                                      "name": "Identifier",
                                      "src": "573:3:16"
                                    }
                                  ],
                                  "id": 3337,
                                  "name": "MemberAccess",
                                  "src": "573:9:16"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3311,
                                    "type": "uint256",
                                    "value": "tokenPrice"
                                  },
                                  "id": 3338,
                                  "name": "Identifier",
                                  "src": "585:10:16"
                                }
                              ],
                              "id": 3339,
                              "name": "BinaryOperation",
                              "src": "573:22:16"
                            }
                          ],
                          "id": 3340,
                          "name": "FunctionCall",
                          "src": "565:31:16"
                        }
                      ],
                      "id": 3341,
                      "name": "ExpressionStatement",
                      "src": "565:31:16"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 3342,
                              "name": "Identifier",
                              "src": "606:5:16"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3343,
                                  "name": "Identifier",
                                  "src": "612:3:16"
                                }
                              ],
                              "id": 3344,
                              "name": "MemberAccess",
                              "src": "612:10:16"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3308,
                                "type": "uint256",
                                "value": "tokenCounter"
                              },
                              "id": 3345,
                              "name": "Identifier",
                              "src": "624:12:16"
                            }
                          ],
                          "id": 3346,
                          "name": "FunctionCall",
                          "src": "606:31:16"
                        }
                      ],
                      "id": 3347,
                      "name": "ExpressionStatement",
                      "src": "606:31:16"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3308,
                                "type": "uint256",
                                "value": "tokenCounter"
                              },
                              "id": 3348,
                              "name": "Identifier",
                              "src": "647:12:16"
                            }
                          ],
                          "id": 3349,
                          "name": "UnaryOperation",
                          "src": "647:14:16"
                        }
                      ],
                      "id": 3350,
                      "name": "ExpressionStatement",
                      "src": "647:14:16"
                    }
                  ],
                  "id": 3351,
                  "name": "Block",
                  "src": "555:113:16"
                }
              ],
              "id": 3352,
              "name": "FunctionDefinition",
              "src": "519:149:16"
            }
          ],
          "id": 3353,
          "name": "ContractDefinition",
          "src": "183:487:16"
        }
      ],
      "id": 3354,
      "name": "SourceUnit",
      "src": "32:639:16"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x04A38Abb115B294bB31272c61B2CdF997058FbC4",
        "transactionHash": "0xdde2d3b99ad764f380e7094c96f552107e58dcda515ae7d95a91c9ec444d9a2b"
      },
      "11155111": {
        "events": {},
        "links": {},
        "address": "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED",
        "transactionHash": "0xed98815924a205a84cd8e815527c8059bd7965fd501003679d6b9d358afcd4a8"
      }
    },
    "schemaVersion": "3.4.11",
    "updatedAt": "2022-11-25T08:10:38.372Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "baseURI()": {
          "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        }
      }
    },
    "userdoc": {
      "methods": {}
    }
  }
  
  export const FakeMeebitsABI = {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whitelist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_token",
            "type": "uint256"
          }
        ],
        "name": "mintAToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newMinter",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "permission",
            "type": "bool"
          }
        ],
        "name": "manageMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newMinter\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"permission\",\"type\":\"bool\"}],\"name\":\"manageMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_token\",\"type\":\"uint256\"}],\"name\":\"mintAToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeMeebits.sol\":\"FakeMeebits\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeMeebits.sol\":{\"keccak256\":\"0x80481bf67bbdcf553040bc8b5de5afdda3522c8c4f7828d6d41db9990a32b50c\",\"urls\":[\"bzz-raw://c9979e7c1739e3a3216daca58a612e50d1c2ce34b372ce1b8c74b80a133ce731\",\"dweb:/ipfs/QmT2jF22rwhVjJLxHwymHWxXgXYtMAmpKhfKsFgaMEpQQn\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f46616b65204d65656269747300000000000000000000000000000000000000008152506040518060400160405280600381526020017f464d420000000000000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b620001ad60201b60201c565b8160069080519060200190620000ae9291906200072f565b508060079080519060200190620000c79291906200072f565b50620000e06380ac58cd60e01b620001ad60201b60201c565b620000f8635b5e139f60e01b620001ad60201b60201c565b6200011063780e9d6360e01b620001ad60201b60201c565b505062000125336001620002b660201b60201c565b6001600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001a76040518060600160405280602581526020016200345260259139620004ca60201b60201c565b620007de565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200024a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200035a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6200036b81620004e660201b60201c565b15620003df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b620003f3600083836200050a60201b60201c565b6200044b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200050f60201b620020101790919060201c565b5062000469818360026200053160201b6200202a179092919060201c565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8060099080519060200190620004e29291906200072f565b5050565b6000620005038260026200056e60201b62001fc61790919060201c565b9050919050565b505050565b600062000529836000018360001b6200059060201b60201c565b905092915050565b600062000565846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6200060a60201b60201c565b90509392505050565b600062000588836000018360001b620006e960201b60201c565b905092915050565b6000620005a483836200070c60201b60201c565b620005ff57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905062000604565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415620006b357846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050620006e2565b82856000016001830381548110620006c757fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200077257805160ff1916838001178555620007a3565b82800160010185558215620007a3579182015b82811115620007a257825182559160200191906001019062000785565b5b509050620007b29190620007b6565b5090565b620007db91905b80821115620007d7576000816000905550600101620007bd565b5090565b90565b612c6480620007ee6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80636c0360eb116100ad578063a22cb46511610071578063a22cb465146106eb578063b88d4fde1461073b578063bfcd198a14610840578063c87b56dd1461086e578063e985e9c5146109155761012c565b80636c0360eb146104e157806370a08231146105645780637e7dd60b146105bc57806395d89b411461060c5780639b19251a1461068f5761012c565b806323b872dd116100f457806323b872dd146102f35780632f745c591461036157806342842e0e146103c35780634f6ccce7146104315780636352211e146104735761012c565b806301ffc9a71461013157806306fdde0314610196578063081812fc14610219578063095ea7b31461028757806318160ddd146102d5575b600080fd5b61017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610991565b604051808215151515815260200191505060405180910390f35b61019e6109f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101de5780820151818401526020810190506101c3565b50505050905090810190601f16801561020b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102456004803603602081101561022f57600080fd5b8101908080359060200190929190505050610a9a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d36004803603604081101561029d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b35565b005b6102dd610c79565b6040518082815260200191505060405180910390f35b61035f6004803603606081101561030957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8a565b005b6103ad6004803603604081101561037757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d00565b6040518082815260200191505060405180910390f35b61042f600480360360608110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d5b565b005b61045d6004803603602081101561044757600080fd5b8101908080359060200190929190505050610d7b565b6040518082815260200191505060405180910390f35b61049f6004803603602081101561048957600080fd5b8101908080359060200190929190505050610d9e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104e9610dd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561052957808201518184015260208101905061050e565b50505050905090810190601f1680156105565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105a66004803603602081101561057a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e77565b6040518082815260200191505060405180910390f35b61060a600480360360408110156105d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f4c565b005b610614611066565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610654578082015181840152602081019050610639565b50505050905090810190601f1680156106815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106d1600480360360208110156106a557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611108565b604051808215151515815260200191505060405180910390f35b6107396004803603604081101561070157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611128565b005b61083e6004803603608081101561075157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107b857600080fd5b8201836020820111156107ca57600080fd5b803590602001918460018302840111640100000000831117156107ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112e0565b005b61086c6004803603602081101561085657600080fd5b8101908080359060200190929190505050611358565b005b61089a6004803603602081101561088457600080fd5b8101908080359060200190929190505050611424565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108da5780820151818401526020810190506108bf565b50505050905090810190601f1680156109075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109776004803603604081101561092b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116f5565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a905780601f10610a6557610100808354040283529160200191610a90565b820191906000526020600020905b815481529060010190602001808311610a7357829003601f168201915b5050505050905090565b6000610aa582611789565b610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b59602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b4082610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bdd6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610be66117a6565b73ffffffffffffffffffffffffffffffffffffffff161480610c155750610c1481610c0f6117a6565b6116f5565b5b610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612aac6038913960400191505060405180910390fd5b610c7483836117ae565b505050565b6000610c856002611867565b905090565b610c9b610c956117a6565b8261187c565b610cf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b610cfb838383611970565b505050565b6000610d5382600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bb390919063ffffffff16565b905092915050565b610d76838383604051806020016040528060008152506112e0565b505050565b600080610d92836002611bcd90919063ffffffff16565b50905080915050919050565b6000610dce82604051806060016040528060298152602001612b0e602991396002611bfc9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ae4602a913960400191505060405180910390fd5b610f45600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611c1b565b9050919050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661100b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b80600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110fe5780601f106110d3576101008083540402835291602001916110fe565b820191906000526020600020905b8154815290600101906020018083116110e157829003601f168201915b5050505050905090565b600a6020528060005260406000206000915054906101000a900460ff1681565b6111306117a6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006111de6117a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661128b6117a6565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6112f16112eb6117a6565b8361187c565b611346576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b61135284848484611c30565b50505050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611417576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b6114213382611ca2565b50565b606061142f82611789565b611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612bae602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561152d5780601f106115025761010080835404028352916020019161152d565b820191906000526020600020905b81548152906001019060200180831161151057829003601f168201915b50505050509050606061153e610dd5565b90506000815114156115545781925050506116f0565b6000825111156116255780826040516020018083805190602001908083835b602083106115965780518252602082019150602081019050602083039250611573565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106115e757805182526020820191506020810190506020830392506115c4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506116f0565b8061162f85611e96565b6040516020018083805190602001908083835b602083106116655780518252602082019150602081019050602083039250611642565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106116b65780518252602082019150602081019050602083039250611693565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061179f826002611fc690919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661182183610d9e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061187582600001611fe0565b9050919050565b600061188782611789565b6118dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a80602c913960400191505060405180910390fd5b60006118e783610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061195657508373ffffffffffffffffffffffffffffffffffffffff1661193e84610a9a565b73ffffffffffffffffffffffffffffffffffffffff16145b80611967575061196681856116f5565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661199082610d9e565b73ffffffffffffffffffffffffffffffffffffffff16146119fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612b856029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612a366024913960400191505060405180910390fd5b611a8d838383611ff1565b611a986000826117ae565b611ae981600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611ff690919063ffffffff16565b50611b3b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611b528183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611bc2836000018361205f565b60001c905092915050565b600080600080611be086600001866120e2565b915091508160001c8160001c8090509350935050509250929050565b6000611c0f846000018460001b8461217b565b60001c90509392505050565b6000611c2982600001612271565b9050919050565b611c3b848484611970565b611c4784848484612282565b611c9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612a046032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d4e81611789565b15611dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611dcd60008383611ff1565b611e1e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611e358183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611ede576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611fc1565b600082905060005b60008214611f08578080600101915050600a8281611f0057fe5b049150611ee6565b6060816040519080825280601f01601f191660200182016040528015611f3d5781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611fb957600a8481611f5e57fe5b0660300160f81b82828060019003935081518110611f7857fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611fb157fe5b049350611f4c565b819450505050505b919050565b6000611fd8836000018360001b6124c7565b905092915050565b600081600001805490509050919050565b505050565b6000612008836000018360001b6124ea565b905092915050565b6000612022836000018360001b6125d2565b905092915050565b6000612056846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612642565b90509392505050565b6000818360000180549050116120c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129e26022913960400191505060405180910390fd5b8260000182815481106120cf57fe5b9060005260206000200154905092915050565b60008082846000018054905011612144576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b376022913960400191505060405180910390fd5b600084600001848154811061215557fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612242576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122075780820151818401526020810190506121ec565b50505050905090810190601f1680156122345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061225557fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006122a38473ffffffffffffffffffffffffffffffffffffffff1661271e565b6122b057600190506124bf565b606061244663150b7a0260e01b6122c56117a6565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561237557808201518184015260208101905061235a565b50505050905090810190601f1680156123a25780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612a04603291398773ffffffffffffffffffffffffffffffffffffffff166127319092919063ffffffff16565b9050600081806020019051602081101561245f57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146125c6576000600182039050600060018660000180549050039050600086600001828154811061253557fe5b906000526020600020015490508087600001848154811061255257fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061258a57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506125cc565b60009150505b92915050565b60006125de8383612749565b61263757826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061263c565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156126e957846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612717565b828560000160018303815481106126fc57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612740848460008561276c565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b6060824710156127c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a5a6026913960400191505060405180910390fd5b6127d08561271e565b612842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612892578051825260208201915060208101905060208303925061286f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146128f4576040519150601f19603f3d011682016040523d82523d6000602084013e6128f9565b606091505b5091509150612909828286612915565b92505050949350505050565b60608315612925578290506129da565b6000835111156129385782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561299f578082015181840152602081019050612984565b50505050905090810190601f1680156129cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212209907637a907501407113f346224d2c6622676ee879b803d9b3d26b9024b0743164736f6c6343000602003368747470733a2f2f6d6565626974732e6c617276616c6162732e636f6d2f6d65656269742f",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c80636c0360eb116100ad578063a22cb46511610071578063a22cb465146106eb578063b88d4fde1461073b578063bfcd198a14610840578063c87b56dd1461086e578063e985e9c5146109155761012c565b80636c0360eb146104e157806370a08231146105645780637e7dd60b146105bc57806395d89b411461060c5780639b19251a1461068f5761012c565b806323b872dd116100f457806323b872dd146102f35780632f745c591461036157806342842e0e146103c35780634f6ccce7146104315780636352211e146104735761012c565b806301ffc9a71461013157806306fdde0314610196578063081812fc14610219578063095ea7b31461028757806318160ddd146102d5575b600080fd5b61017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610991565b604051808215151515815260200191505060405180910390f35b61019e6109f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101de5780820151818401526020810190506101c3565b50505050905090810190601f16801561020b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102456004803603602081101561022f57600080fd5b8101908080359060200190929190505050610a9a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d36004803603604081101561029d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b35565b005b6102dd610c79565b6040518082815260200191505060405180910390f35b61035f6004803603606081101561030957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8a565b005b6103ad6004803603604081101561037757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d00565b6040518082815260200191505060405180910390f35b61042f600480360360608110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d5b565b005b61045d6004803603602081101561044757600080fd5b8101908080359060200190929190505050610d7b565b6040518082815260200191505060405180910390f35b61049f6004803603602081101561048957600080fd5b8101908080359060200190929190505050610d9e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104e9610dd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561052957808201518184015260208101905061050e565b50505050905090810190601f1680156105565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105a66004803603602081101561057a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e77565b6040518082815260200191505060405180910390f35b61060a600480360360408110156105d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f4c565b005b610614611066565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610654578082015181840152602081019050610639565b50505050905090810190601f1680156106815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106d1600480360360208110156106a557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611108565b604051808215151515815260200191505060405180910390f35b6107396004803603604081101561070157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611128565b005b61083e6004803603608081101561075157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107b857600080fd5b8201836020820111156107ca57600080fd5b803590602001918460018302840111640100000000831117156107ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112e0565b005b61086c6004803603602081101561085657600080fd5b8101908080359060200190929190505050611358565b005b61089a6004803603602081101561088457600080fd5b8101908080359060200190929190505050611424565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108da5780820151818401526020810190506108bf565b50505050905090810190601f1680156109075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109776004803603604081101561092b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116f5565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a905780601f10610a6557610100808354040283529160200191610a90565b820191906000526020600020905b815481529060010190602001808311610a7357829003601f168201915b5050505050905090565b6000610aa582611789565b610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b59602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b4082610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bdd6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610be66117a6565b73ffffffffffffffffffffffffffffffffffffffff161480610c155750610c1481610c0f6117a6565b6116f5565b5b610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612aac6038913960400191505060405180910390fd5b610c7483836117ae565b505050565b6000610c856002611867565b905090565b610c9b610c956117a6565b8261187c565b610cf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b610cfb838383611970565b505050565b6000610d5382600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bb390919063ffffffff16565b905092915050565b610d76838383604051806020016040528060008152506112e0565b505050565b600080610d92836002611bcd90919063ffffffff16565b50905080915050919050565b6000610dce82604051806060016040528060298152602001612b0e602991396002611bfc9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ae4602a913960400191505060405180910390fd5b610f45600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611c1b565b9050919050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661100b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b80600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110fe5780601f106110d3576101008083540402835291602001916110fe565b820191906000526020600020905b8154815290600101906020018083116110e157829003601f168201915b5050505050905090565b600a6020528060005260406000206000915054906101000a900460ff1681565b6111306117a6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006111de6117a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661128b6117a6565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6112f16112eb6117a6565b8361187c565b611346576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b61135284848484611c30565b50505050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611417576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b6114213382611ca2565b50565b606061142f82611789565b611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612bae602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561152d5780601f106115025761010080835404028352916020019161152d565b820191906000526020600020905b81548152906001019060200180831161151057829003601f168201915b50505050509050606061153e610dd5565b90506000815114156115545781925050506116f0565b6000825111156116255780826040516020018083805190602001908083835b602083106115965780518252602082019150602081019050602083039250611573565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106115e757805182526020820191506020810190506020830392506115c4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506116f0565b8061162f85611e96565b6040516020018083805190602001908083835b602083106116655780518252602082019150602081019050602083039250611642565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106116b65780518252602082019150602081019050602083039250611693565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061179f826002611fc690919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661182183610d9e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061187582600001611fe0565b9050919050565b600061188782611789565b6118dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a80602c913960400191505060405180910390fd5b60006118e783610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061195657508373ffffffffffffffffffffffffffffffffffffffff1661193e84610a9a565b73ffffffffffffffffffffffffffffffffffffffff16145b80611967575061196681856116f5565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661199082610d9e565b73ffffffffffffffffffffffffffffffffffffffff16146119fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612b856029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612a366024913960400191505060405180910390fd5b611a8d838383611ff1565b611a986000826117ae565b611ae981600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611ff690919063ffffffff16565b50611b3b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611b528183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611bc2836000018361205f565b60001c905092915050565b600080600080611be086600001866120e2565b915091508160001c8160001c8090509350935050509250929050565b6000611c0f846000018460001b8461217b565b60001c90509392505050565b6000611c2982600001612271565b9050919050565b611c3b848484611970565b611c4784848484612282565b611c9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612a046032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d4e81611789565b15611dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611dcd60008383611ff1565b611e1e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611e358183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611ede576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611fc1565b600082905060005b60008214611f08578080600101915050600a8281611f0057fe5b049150611ee6565b6060816040519080825280601f01601f191660200182016040528015611f3d5781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611fb957600a8481611f5e57fe5b0660300160f81b82828060019003935081518110611f7857fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611fb157fe5b049350611f4c565b819450505050505b919050565b6000611fd8836000018360001b6124c7565b905092915050565b600081600001805490509050919050565b505050565b6000612008836000018360001b6124ea565b905092915050565b6000612022836000018360001b6125d2565b905092915050565b6000612056846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612642565b90509392505050565b6000818360000180549050116120c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129e26022913960400191505060405180910390fd5b8260000182815481106120cf57fe5b9060005260206000200154905092915050565b60008082846000018054905011612144576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b376022913960400191505060405180910390fd5b600084600001848154811061215557fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612242576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122075780820151818401526020810190506121ec565b50505050905090810190601f1680156122345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061225557fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006122a38473ffffffffffffffffffffffffffffffffffffffff1661271e565b6122b057600190506124bf565b606061244663150b7a0260e01b6122c56117a6565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561237557808201518184015260208101905061235a565b50505050905090810190601f1680156123a25780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612a04603291398773ffffffffffffffffffffffffffffffffffffffff166127319092919063ffffffff16565b9050600081806020019051602081101561245f57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146125c6576000600182039050600060018660000180549050039050600086600001828154811061253557fe5b906000526020600020015490508087600001848154811061255257fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061258a57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506125cc565b60009150505b92915050565b60006125de8383612749565b61263757826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061263c565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156126e957846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612717565b828560000160018303815481106126fc57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612740848460008561276c565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b6060824710156127c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a5a6026913960400191505060405180910390fd5b6127d08561271e565b612842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612892578051825260208201915060208101905060208303925061286f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146128f4576040519150601f19603f3d011682016040523d82523d6000602084013e6128f9565b606091505b5091509150612909828286612915565b92505050949350505050565b60608315612925578290506129da565b6000835111156129385782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561299f578082015181840152602081019050612984565b50505050905090810190601f1680156129cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212209907637a907501407113f346224d2c6622676ee879b803d9b3d26b9024b0743164736f6c63430006020033",
    "sourceMap": "183:659:14:-:0;;;285:188;8:9:-1;5:2;;;30:1;27;20:12;5:2;285:188:14;3577:369:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:0;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:3;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;346:20:14::1;352:10;364:1;346:5;;;:20;;:::i;:::-;400:4;376:9;:21;386:10;376:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;414:52;;;;;;;;;;;;;;;;;;:11;;;:52;;:::i;:::-;183:659:::0;;1507:198:0;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;12246:393:3:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;;;:16;;:::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;;;:45;;:::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;;;;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;;;;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;14873:98::-;14956:8;14945;:19;;;;;;;;;;;;:::i;:::-;;14873:98;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;;;;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;17010:93::-;;;;:::o;8068:129:11:-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;;;:32;;:::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;;;:64;;:::i;:::-;7132:71;;7027:183;;;;;:::o;7588:149::-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;;;:35;;:::i;:::-;7688:42;;7588:149;;;;:::o;1640:404:11:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;4278:123::-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;183:659:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "183:659:14:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;183:659:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:148:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4517:98:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4517:98:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7222:217:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6766:395;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6766:395:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8086:300;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8086:300:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8452:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6540:169:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4280:175;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4280:175:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5855:95;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5855:95:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4005:218;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4005:218:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;581:146:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;581:146:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4679:102:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4679:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;237:41:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;237:41:14;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7506:290:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7506:290:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8667:282;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8667:282:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8667:282:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8667:282:3;;;;;;;;;;;;;;;:::i;:::-;;479:96:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;479:96:14;;;;;;;;;;;;;;;;;:::i;:::-;;4847:776:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4847:776:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4847:776:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7862:162;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7862:162:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:148:0;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:3:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;6260:208::-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;8086:300::-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;4280:175::-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;4005:218::-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;581:146:14:-;773:9;:21;783:10;773:21;;;;;;;;;;;;;;;;;;;;;;;;;765:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;710:10:::1;687:9;:20;697:9;687:20;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;581:146:::0;;:::o;4679:102:3:-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;237:41:14:-;;;;;;;;;;;;;;;;;;;;;;:::o;7506:290:3:-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;8667:282::-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;479:96:14:-;773:9;:21;783:10;773:21;;;;;;;;;;;;;;;;;;;;;;;;;765:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;543:25:::1;549:10;561:6;543:5;:25::i;:::-;479:96:::0;:::o;4847:776:3:-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5415:33:3;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5573:42:3;;;5559:57;;;;4847:776;;;;:::o;7862:162::-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:9:-;651:15;685:10;678:17;;598:104;:::o;16225:189:3:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:10:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:3:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:11:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:10:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:11:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;9811:269:3:-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;12246:393::-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;210:725:12:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:12;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:10:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:3:-;;;;:::o;8365:135:11:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:11:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:10:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6562:36:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:11:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15524:589:3:-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15773:175:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15773:175:3;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15773:175:3;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16029:32:3;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:10:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:11:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:8:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:8:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:8;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:8;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7765:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\";\n\ncontract FakeMeebits is IERC721Metadata, ERC721 {\n    mapping(address => bool) public whitelist;\n\n    constructor() public ERC721(\"Fake Meebits\", \"FMB\") {\n        _mint(msg.sender, 1);\n        whitelist[msg.sender] = true;\n        _setBaseURI(\"https://meebits.larvalabs.com/meebit/\");\n    }\n\n    function mintAToken(uint256 _token) public onlyMinter {\n        _mint(msg.sender, _token);\n    }\n\n    function manageMinter(address newMinter, bool permission)\n        public\n        onlyMinter\n    {\n        whitelist[newMinter] = permission;\n    }\n\n    modifier onlyMinter() {\n        require(whitelist[msg.sender], \"Account Not Whitelisted\");\n        _;\n    }\n}\n",
    "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeMeebits.sol",
    "ast": {
      "absolutePath": "project:/contracts/FakeMeebits.sol",
      "exportedSymbols": {
        "FakeMeebits": [
          3011
        ]
      },
      "id": 3012,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 2933,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:14"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 2934,
          "nodeType": "ImportDirective",
          "scope": 3012,
          "sourceUnit": 1317,
          "src": "57:57:14",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "id": 2935,
          "nodeType": "ImportDirective",
          "scope": 3012,
          "sourceUnit": 1470,
          "src": "115:66:14",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 2936,
                "name": "IERC721Metadata",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1469,
                "src": "207:15:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC721Metadata_$1469",
                  "typeString": "contract IERC721Metadata"
                }
              },
              "id": 2937,
              "nodeType": "InheritanceSpecifier",
              "src": "207:15:14"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 2938,
                "name": "ERC721",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1316,
                "src": "224:6:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC721_$1316",
                  "typeString": "contract ERC721"
                }
              },
              "id": 2939,
              "nodeType": "InheritanceSpecifier",
              "src": "224:6:14"
            }
          ],
          "contractDependencies": [
            52,
            62,
            1316,
            1419,
            1446,
            1469,
            1793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 3011,
          "linearizedBaseContracts": [
            3011,
            1316,
            1446,
            1469,
            1419,
            52,
            62,
            1793
          ],
          "name": "FakeMeebits",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "9b19251a",
              "id": 2943,
              "name": "whitelist",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3011,
              "src": "237:41:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 2942,
                "keyType": {
                  "id": 2940,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "245:7:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "237:24:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 2941,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "256:4:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2967,
                "nodeType": "Block",
                "src": "336:137:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2951,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "352:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "352:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 2953,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "364:1:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 2950,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "346:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2954,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "346:20:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2955,
                    "nodeType": "ExpressionStatement",
                    "src": "346:20:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 2961,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 2956,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2943,
                          "src": "376:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 2959,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2957,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "386:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2958,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "386:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "376:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 2960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "400:4:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "376:28:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 2962,
                    "nodeType": "ExpressionStatement",
                    "src": "376:28:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "68747470733a2f2f6d6565626974732e6c617276616c6162732e636f6d2f6d65656269742f",
                          "id": 2964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "426:39:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0d18b0985cabdff2cfdf3f703eaa511b3a434348792814f145352fc8fd139c5e",
                            "typeString": "literal_string \"https://meebits.larvalabs.com/meebit/\""
                          },
                          "value": "https://meebits.larvalabs.com/meebit/"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_0d18b0985cabdff2cfdf3f703eaa511b3a434348792814f145352fc8fd139c5e",
                            "typeString": "literal_string \"https://meebits.larvalabs.com/meebit/\""
                          }
                        ],
                        "id": 2963,
                        "name": "_setBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1225,
                        "src": "414:11:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 2965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "414:52:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2966,
                    "nodeType": "ExpressionStatement",
                    "src": "414:52:14"
                  }
                ]
              },
              "documentation": null,
              "id": 2968,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "46616b65204d656562697473",
                      "id": 2946,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "313:14:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_5e2d56b48e9073cc82909b01049768a5e6f578b7cc938390a6a3da94725af6d6",
                        "typeString": "literal_string \"Fake Meebits\""
                      },
                      "value": "Fake Meebits"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "464d42",
                      "id": 2947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "329:5:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_37097b8be6a4bb0d6e4ebf9a0017144591b4af157fbe45c853ae02f34d2d584f",
                        "typeString": "literal_string \"FMB\""
                      },
                      "value": "FMB"
                    }
                  ],
                  "id": 2948,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2945,
                    "name": "ERC721",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1316,
                    "src": "306:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC721_$1316_$",
                      "typeString": "type(contract ERC721)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "306:29:14"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2944,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "296:2:14"
              },
              "returnParameters": {
                "id": 2949,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "336:0:14"
              },
              "scope": 3011,
              "src": "285:188:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2981,
                "nodeType": "Block",
                "src": "533:42:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2976,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "549:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2977,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "549:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 2978,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2970,
                          "src": "561:6:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 2975,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "543:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "543:25:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2980,
                    "nodeType": "ExpressionStatement",
                    "src": "543:25:14"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "bfcd198a",
              "id": 2982,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 2973,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2972,
                    "name": "onlyMinter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3010,
                    "src": "522:10:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "522:10:14"
                }
              ],
              "name": "mintAToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2971,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2970,
                    "name": "_token",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 2982,
                    "src": "499:14:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2969,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "499:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "498:16:14"
              },
              "returnParameters": {
                "id": 2974,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "533:0:14"
              },
              "scope": 3011,
              "src": "479:96:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2997,
                "nodeType": "Block",
                "src": "677:50:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 2995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 2991,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2943,
                          "src": "687:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 2993,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 2992,
                          "name": "newMinter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2984,
                          "src": "697:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "687:20:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 2994,
                        "name": "permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2986,
                        "src": "710:10:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "687:33:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 2996,
                    "nodeType": "ExpressionStatement",
                    "src": "687:33:14"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "7e7dd60b",
              "id": 2998,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 2989,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2988,
                    "name": "onlyMinter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3010,
                    "src": "662:10:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "662:10:14"
                }
              ],
              "name": "manageMinter",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2987,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2984,
                    "name": "newMinter",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 2998,
                    "src": "603:17:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2983,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "603:7:14",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 2986,
                    "name": "permission",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 2998,
                    "src": "622:15:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 2985,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "622:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "602:36:14"
              },
              "returnParameters": {
                "id": 2990,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "677:0:14"
              },
              "scope": 3011,
              "src": "581:146:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3009,
                "nodeType": "Block",
                "src": "755:85:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3001,
                            "name": "whitelist",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2943,
                            "src": "773:9:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 3004,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3002,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "783:3:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3003,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "783:10:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "773:21:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4163636f756e74204e6f742057686974656c6973746564",
                          "id": 3005,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "796:25:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                            "typeString": "literal_string \"Account Not Whitelisted\""
                          },
                          "value": "Account Not Whitelisted"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                            "typeString": "literal_string \"Account Not Whitelisted\""
                          }
                        ],
                        "id": 3000,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "765:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "765:57:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3007,
                    "nodeType": "ExpressionStatement",
                    "src": "765:57:14"
                  },
                  {
                    "id": 3008,
                    "nodeType": "PlaceholderStatement",
                    "src": "832:1:14"
                  }
                ]
              },
              "documentation": null,
              "id": 3010,
              "name": "onlyMinter",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 2999,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "752:2:14"
              },
              "src": "733:107:14",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 3012,
          "src": "183:659:14"
        }
      ],
      "src": "32:811:14"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/FakeMeebits.sol",
        "exportedSymbols": {
          "FakeMeebits": [
            3011
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.6",
              ".2"
            ]
          },
          "id": 2933,
          "name": "PragmaDirective",
          "src": "32:23:14"
        },
        {
          "attributes": {
            "SourceUnit": 1317,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "scope": 3012,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 2934,
          "name": "ImportDirective",
          "src": "57:57:14"
        },
        {
          "attributes": {
            "SourceUnit": 1470,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "scope": 3012,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 2935,
          "name": "ImportDirective",
          "src": "115:66:14"
        },
        {
          "attributes": {
            "abstract": false,
            "contractDependencies": [
              52,
              62,
              1316,
              1419,
              1446,
              1469,
              1793
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              3011,
              1316,
              1446,
              1469,
              1419,
              52,
              62,
              1793
            ],
            "name": "FakeMeebits",
            "scope": 3012
          },
          "children": [
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "IERC721Metadata",
                    "referencedDeclaration": 1469,
                    "type": "contract IERC721Metadata"
                  },
                  "id": 2936,
                  "name": "UserDefinedTypeName",
                  "src": "207:15:14"
                }
              ],
              "id": 2937,
              "name": "InheritanceSpecifier",
              "src": "207:15:14"
            },
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "ERC721",
                    "referencedDeclaration": 1316,
                    "type": "contract ERC721"
                  },
                  "id": 2938,
                  "name": "UserDefinedTypeName",
                  "src": "224:6:14"
                }
              ],
              "id": 2939,
              "name": "InheritanceSpecifier",
              "src": "224:6:14"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "9b19251a",
                "name": "whitelist",
                "overrides": null,
                "scope": 3011,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => bool)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => bool)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 2940,
                      "name": "ElementaryTypeName",
                      "src": "245:7:14"
                    },
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 2941,
                      "name": "ElementaryTypeName",
                      "src": "256:4:14"
                    }
                  ],
                  "id": 2942,
                  "name": "Mapping",
                  "src": "237:24:14"
                }
              ],
              "id": 2943,
              "name": "VariableDeclaration",
              "src": "237:41:14"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "name": "",
                "overrides": null,
                "scope": 3011,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2944,
                  "name": "ParameterList",
                  "src": "296:2:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2949,
                  "name": "ParameterList",
                  "src": "336:0:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 1316,
                        "type": "type(contract ERC721)",
                        "value": "ERC721"
                      },
                      "id": 2945,
                      "name": "Identifier",
                      "src": "306:6:14"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "46616b65204d656562697473",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"Fake Meebits\"",
                        "value": "Fake Meebits"
                      },
                      "id": 2946,
                      "name": "Literal",
                      "src": "313:14:14"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "464d42",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"FMB\"",
                        "value": "FMB"
                      },
                      "id": 2947,
                      "name": "Literal",
                      "src": "329:5:14"
                    }
                  ],
                  "id": 2948,
                  "name": "ModifierInvocation",
                  "src": "306:29:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 2950,
                              "name": "Identifier",
                              "src": "346:5:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 2951,
                                  "name": "Identifier",
                                  "src": "352:3:14"
                                }
                              ],
                              "id": 2952,
                              "name": "MemberAccess",
                              "src": "352:10:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "31",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 1",
                                "value": "1"
                              },
                              "id": 2953,
                              "name": "Literal",
                              "src": "364:1:14"
                            }
                          ],
                          "id": 2954,
                          "name": "FunctionCall",
                          "src": "346:20:14"
                        }
                      ],
                      "id": 2955,
                      "name": "ExpressionStatement",
                      "src": "346:20:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 2943,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 2956,
                                  "name": "Identifier",
                                  "src": "376:9:14"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 2957,
                                      "name": "Identifier",
                                      "src": "386:3:14"
                                    }
                                  ],
                                  "id": 2958,
                                  "name": "MemberAccess",
                                  "src": "386:10:14"
                                }
                              ],
                              "id": 2959,
                              "name": "IndexAccess",
                              "src": "376:21:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "74727565",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "true"
                              },
                              "id": 2960,
                              "name": "Literal",
                              "src": "400:4:14"
                            }
                          ],
                          "id": 2961,
                          "name": "Assignment",
                          "src": "376:28:14"
                        }
                      ],
                      "id": 2962,
                      "name": "ExpressionStatement",
                      "src": "376:28:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_0d18b0985cabdff2cfdf3f703eaa511b3a434348792814f145352fc8fd139c5e",
                                    "typeString": "literal_string \"https://meebits.larvalabs.com/meebit/\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1225,
                                "type": "function (string memory)",
                                "value": "_setBaseURI"
                              },
                              "id": 2963,
                              "name": "Identifier",
                              "src": "414:11:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "68747470733a2f2f6d6565626974732e6c617276616c6162732e636f6d2f6d65656269742f",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"https://meebits.larvalabs.com/meebit/\"",
                                "value": "https://meebits.larvalabs.com/meebit/"
                              },
                              "id": 2964,
                              "name": "Literal",
                              "src": "426:39:14"
                            }
                          ],
                          "id": 2965,
                          "name": "FunctionCall",
                          "src": "414:52:14"
                        }
                      ],
                      "id": 2966,
                      "name": "ExpressionStatement",
                      "src": "414:52:14"
                    }
                  ],
                  "id": 2967,
                  "name": "Block",
                  "src": "336:137:14"
                }
              ],
              "id": 2968,
              "name": "FunctionDefinition",
              "src": "285:188:14"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "bfcd198a",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "name": "mintAToken",
                "overrides": null,
                "scope": 3011,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_token",
                        "overrides": null,
                        "scope": 2982,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 2969,
                          "name": "ElementaryTypeName",
                          "src": "499:7:14"
                        }
                      ],
                      "id": 2970,
                      "name": "VariableDeclaration",
                      "src": "499:14:14"
                    }
                  ],
                  "id": 2971,
                  "name": "ParameterList",
                  "src": "498:16:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2974,
                  "name": "ParameterList",
                  "src": "533:0:14"
                },
                {
                  "attributes": {
                    "arguments": null
                  },
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 3010,
                        "type": "modifier ()",
                        "value": "onlyMinter"
                      },
                      "id": 2972,
                      "name": "Identifier",
                      "src": "522:10:14"
                    }
                  ],
                  "id": 2973,
                  "name": "ModifierInvocation",
                  "src": "522:10:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 2975,
                              "name": "Identifier",
                              "src": "543:5:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 2976,
                                  "name": "Identifier",
                                  "src": "549:3:14"
                                }
                              ],
                              "id": 2977,
                              "name": "MemberAccess",
                              "src": "549:10:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2970,
                                "type": "uint256",
                                "value": "_token"
                              },
                              "id": 2978,
                              "name": "Identifier",
                              "src": "561:6:14"
                            }
                          ],
                          "id": 2979,
                          "name": "FunctionCall",
                          "src": "543:25:14"
                        }
                      ],
                      "id": 2980,
                      "name": "ExpressionStatement",
                      "src": "543:25:14"
                    }
                  ],
                  "id": 2981,
                  "name": "Block",
                  "src": "533:42:14"
                }
              ],
              "id": 2982,
              "name": "FunctionDefinition",
              "src": "479:96:14"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "7e7dd60b",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "name": "manageMinter",
                "overrides": null,
                "scope": 3011,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "newMinter",
                        "overrides": null,
                        "scope": 2998,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 2983,
                          "name": "ElementaryTypeName",
                          "src": "603:7:14"
                        }
                      ],
                      "id": 2984,
                      "name": "VariableDeclaration",
                      "src": "603:17:14"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "permission",
                        "overrides": null,
                        "scope": 2998,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 2985,
                          "name": "ElementaryTypeName",
                          "src": "622:4:14"
                        }
                      ],
                      "id": 2986,
                      "name": "VariableDeclaration",
                      "src": "622:15:14"
                    }
                  ],
                  "id": 2987,
                  "name": "ParameterList",
                  "src": "602:36:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2990,
                  "name": "ParameterList",
                  "src": "677:0:14"
                },
                {
                  "attributes": {
                    "arguments": null
                  },
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 3010,
                        "type": "modifier ()",
                        "value": "onlyMinter"
                      },
                      "id": 2988,
                      "name": "Identifier",
                      "src": "662:10:14"
                    }
                  ],
                  "id": 2989,
                  "name": "ModifierInvocation",
                  "src": "662:10:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 2943,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 2991,
                                  "name": "Identifier",
                                  "src": "687:9:14"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 2984,
                                    "type": "address",
                                    "value": "newMinter"
                                  },
                                  "id": 2992,
                                  "name": "Identifier",
                                  "src": "697:9:14"
                                }
                              ],
                              "id": 2993,
                              "name": "IndexAccess",
                              "src": "687:20:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2986,
                                "type": "bool",
                                "value": "permission"
                              },
                              "id": 2994,
                              "name": "Identifier",
                              "src": "710:10:14"
                            }
                          ],
                          "id": 2995,
                          "name": "Assignment",
                          "src": "687:33:14"
                        }
                      ],
                      "id": 2996,
                      "name": "ExpressionStatement",
                      "src": "687:33:14"
                    }
                  ],
                  "id": 2997,
                  "name": "Block",
                  "src": "677:50:14"
                }
              ],
              "id": 2998,
              "name": "FunctionDefinition",
              "src": "581:146:14"
            },
            {
              "attributes": {
                "documentation": null,
                "name": "onlyMinter",
                "overrides": null,
                "virtual": false,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2999,
                  "name": "ParameterList",
                  "src": "752:2:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                                    "typeString": "literal_string \"Account Not Whitelisted\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3000,
                              "name": "Identifier",
                              "src": "765:7:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 2943,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 3001,
                                  "name": "Identifier",
                                  "src": "773:9:14"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3002,
                                      "name": "Identifier",
                                      "src": "783:3:14"
                                    }
                                  ],
                                  "id": 3003,
                                  "name": "MemberAccess",
                                  "src": "783:10:14"
                                }
                              ],
                              "id": 3004,
                              "name": "IndexAccess",
                              "src": "773:21:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4163636f756e74204e6f742057686974656c6973746564",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Account Not Whitelisted\"",
                                "value": "Account Not Whitelisted"
                              },
                              "id": 3005,
                              "name": "Literal",
                              "src": "796:25:14"
                            }
                          ],
                          "id": 3006,
                          "name": "FunctionCall",
                          "src": "765:57:14"
                        }
                      ],
                      "id": 3007,
                      "name": "ExpressionStatement",
                      "src": "765:57:14"
                    },
                    {
                      "id": 3008,
                      "name": "PlaceholderStatement",
                      "src": "832:1:14"
                    }
                  ],
                  "id": 3009,
                  "name": "Block",
                  "src": "755:85:14"
                }
              ],
              "id": 3010,
              "name": "ModifierDefinition",
              "src": "733:107:14"
            }
          ],
          "id": 3011,
          "name": "ContractDefinition",
          "src": "183:659:14"
        }
      ],
      "id": 3012,
      "name": "SourceUnit",
      "src": "32:811:14"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x2D48C391DC6b9Db2A3FdadCD2b64B5eCb0B11B5E",
        "transactionHash": "0x0df4c1ae180816b101afa9812de2c1d7133211984c3f6f4b42d2878998b181f6"
      },
      "11155111": {
        "events": {},
        "links": {},
        "address": "0xD1d148Be044AEB4948B48A03BeA2874871a26003",
        "transactionHash": "0xefc6e9f9ba8ad0b223b747be124cd857b4c615671e16820bedf8fbd74f74f17b"
      }
    },
    "schemaVersion": "3.4.11",
    "updatedAt": "2022-11-25T08:11:37.761Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "baseURI()": {
          "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        }
      }
    },
    "userdoc": {
      "methods": {}
    }
  }
  
  export const FakeMeebitsClaimerABI = {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_maxTokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_ERC721address",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "_value",
            "type": "bool"
          }
        ],
        "name": "UpdateWhitelist",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_tokenNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_tokenClaimer",
            "type": "address"
          }
        ],
        "name": "aTokenWasClaimed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "_withdrawer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_funds",
            "type": "uint256"
          }
        ],
        "name": "withdrawFunds",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "_tipper",
            "type": "address"
          }
        ],
        "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tokensThatWereClaimed",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whitelist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenToClaim",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "claimAToken",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [],
        "name": "withdrawTips",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_value",
            "type": "bool"
          }
        ],
        "name": "updateWhitelist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maxTokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_ERC721address\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"UpdateWhitelist\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_tokenNumber\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_tokenClaimer\",\"type\":\"address\"}],\"name\":\"aTokenWasClaimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_withdrawer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_funds\",\"type\":\"uint256\"}],\"name\":\"withdrawFunds\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_tipper\",\"type\":\"address\"}],\"name\":\"yeeeeeeaaaaaahThxCoeurCoeurCoeur\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenToClaim\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_signature\",\"type\":\"bytes\"}],\"name\":\"claimAToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokensThatWereClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"updateWhitelist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawTips\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeMeebitsClaimer.sol\":\"FakeMeebitsClaimer\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeMeebits.sol\":{\"keccak256\":\"0x80481bf67bbdcf553040bc8b5de5afdda3522c8c4f7828d6d41db9990a32b50c\",\"urls\":[\"bzz-raw://c9979e7c1739e3a3216daca58a612e50d1c2ce34b372ce1b8c74b80a133ce731\",\"dweb:/ipfs/QmT2jF22rwhVjJLxHwymHWxXgXYtMAmpKhfKsFgaMEpQQn\"]},\"project:/contracts/FakeMeebitsClaimer.sol\":{\"keccak256\":\"0x0fd3643adf65ae6f9e162e55c21acfaf76a38f80308d33331c5f0a9ab0508035\",\"urls\":[\"bzz-raw://436d2f8626939da710b3c834b7da43c26be8bc3e85645038e3cba9fdd8f05b10\",\"dweb:/ipfs/Qmbf2WuF4jVHmPdNTErcYhX7XiWZn2K8n4TEMj36oPM6XL\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50604051610c9f380380610c9f8339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160028190555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610ba1806100fe6000396000f3fe60806040526004361061004e5760003560e01c80630d392cd9146100ce578063255dee64146101435780633aaa74b2146102205780634a80edcb146102375780639b19251a1461028a5761004f565b5b60003411156100cc57346003600082825401925050819055507f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b005b3480156100da57600080fd5b50610129600480360360408110156100f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506102f3565b604051808215151515815260200191505060405180910390f35b6102066004803603604081101561015957600080fd5b81019080803590602001909291908035906020019064010000000081111561018057600080fd5b82018360208201111561019257600080fd5b803590602001918460018302840111640100000000831117156101b457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610482565b604051808215151515815260200191505060405180910390f35b34801561022c57600080fd5b5061023561083a565b005b34801561024357600080fd5b506102706004803603602081101561025a57600080fd5b81019080803590602001909291905050506109b0565b604051808215151515815260200191505060405180910390f35b34801561029657600080fd5b506102d9600480360360208110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d0565b604051808215151515815260200191505060405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f08b2c0469ecd1d7a21d7e1492f0fc75fc7e8e0fa4fdf4275949c90875f5ebdf58383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a16001905092915050565b60006001600084815260200190815260200160002060009054906101000a900460ff1615610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436c61696d3a20746f6b656e20616c726561647920636c61696d65640000000081525060200191505060405180910390fd5b600254831115610590576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f436c61696d3a20746f6b656e4964206f7574626f756e6473000000000000000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405160208183030381529060405280519060200120905061061b81846109f0565b61068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f436c61696d3a207369676e6572206e6f742077686974656c697374656400000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663bfcd198a866040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561070757600080fd5b505af115801561071b573d6000803e3d6000fd5b50505050600180600087815260200190815260200160002060006101000a81548160ff0219169083151502179055507f4079d6cdd2cbe956002b074ad7fb0ab4a6e5b284448268f20d7e9b0b6e60562a8533604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16000341115610832577f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1346003600082825401925050819055505b505092915050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610940573d6000803e3d6000fd5b507fc10753299d70f8b15c8a36ea98ae66c6d383e39fa5dd4e0ffcdea85c2223b2c833600354604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60016020528060005260406000206000915054906101000a900460ff1681565b60006020528060005260406000206000915054906101000a900460ff1681565b6000806000806041855114610a0b5760009350505050610b65565b6020850151925060408501519150606085015160001a9050601b8160ff161015610a3657601b810190505b601b8160ff1614158015610a4e5750601c8160ff1614155b15610a5f5760009350505050610b65565b60008060018860405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084878760405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610b0d573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1693505050505b9291505056fea2646970667358221220dcc19210294c84253225f2a5aa3479cf67ff50f652f8048a2bb753be1883d57764736f6c63430006020033",
    "deployedBytecode": "0x60806040526004361061004e5760003560e01c80630d392cd9146100ce578063255dee64146101435780633aaa74b2146102205780634a80edcb146102375780639b19251a1461028a5761004f565b5b60003411156100cc57346003600082825401925050819055507f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b005b3480156100da57600080fd5b50610129600480360360408110156100f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506102f3565b604051808215151515815260200191505060405180910390f35b6102066004803603604081101561015957600080fd5b81019080803590602001909291908035906020019064010000000081111561018057600080fd5b82018360208201111561019257600080fd5b803590602001918460018302840111640100000000831117156101b457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610482565b604051808215151515815260200191505060405180910390f35b34801561022c57600080fd5b5061023561083a565b005b34801561024357600080fd5b506102706004803603602081101561025a57600080fd5b81019080803590602001909291905050506109b0565b604051808215151515815260200191505060405180910390f35b34801561029657600080fd5b506102d9600480360360208110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d0565b604051808215151515815260200191505060405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f08b2c0469ecd1d7a21d7e1492f0fc75fc7e8e0fa4fdf4275949c90875f5ebdf58383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a16001905092915050565b60006001600084815260200190815260200160002060009054906101000a900460ff1615610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436c61696d3a20746f6b656e20616c726561647920636c61696d65640000000081525060200191505060405180910390fd5b600254831115610590576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f436c61696d3a20746f6b656e4964206f7574626f756e6473000000000000000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405160208183030381529060405280519060200120905061061b81846109f0565b61068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f436c61696d3a207369676e6572206e6f742077686974656c697374656400000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663bfcd198a866040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561070757600080fd5b505af115801561071b573d6000803e3d6000fd5b50505050600180600087815260200190815260200160002060006101000a81548160ff0219169083151502179055507f4079d6cdd2cbe956002b074ad7fb0ab4a6e5b284448268f20d7e9b0b6e60562a8533604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16000341115610832577f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1346003600082825401925050819055505b505092915050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610940573d6000803e3d6000fd5b507fc10753299d70f8b15c8a36ea98ae66c6d383e39fa5dd4e0ffcdea85c2223b2c833600354604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60016020528060005260406000206000915054906101000a900460ff1681565b60006020528060005260406000206000915054906101000a900460ff1681565b6000806000806041855114610a0b5760009350505050610b65565b6020850151925060408501519150606085015160001a9050601b8160ff161015610a3657601b810190505b601b8160ff1614158015610a4e5750601c8160ff1614155b15610a5f5760009350505050610b65565b60008060018860405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084878760405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610b0d573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1693505050505b9291505056fea2646970667358221220dcc19210294c84253225f2a5aa3479cf67ff50f652f8048a2bb753be1883d57764736f6c63430006020033",
    "sourceMap": "86:4216:15:-:0;;;543:180;8:9:-1;5:2;;;30:1;27;20:12;5:2;543:180:15;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;543:180:15;;;;;;;;;;;;;;;;;;;;;;;;;638:4;614:9;:21;624:10;614:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;665:11;652:10;:24;;;;702:14;686:13;;:30;;;;;;;;;;;;;;;;;;543:180;;86:4216;;;;;;",
    "deployedSourceMap": "86:4216:15:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;784:1;772:9;:13;768:130;;;815:9;801:10;;:23;;;;;;;;;;;843:44;876:10;843:44;;;;;;;;;;;;;;;;;;;;;;768:130;86:4216;3974:208;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3974:208:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3974:208:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;910:1325;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;910:1325:15;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;910:1325:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;910:1325:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;910:1325:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;910:1325:15;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2241:148;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2241:148:15;;;:::i;:::-;;416:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;416:50:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;416:50:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;369:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;369:41:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;369:41:15;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3974:208;4062:4;4233:9;:21;4243:10;4233:21;;;;;;;;;;;;;;;;;;;;;;;;;4225:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4100:6:::1;4078:9;:19:::0;4088:8:::1;4078:19;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;4121:33;4137:8;4147:6;4121:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4171:4;4164:11;;3974:208:::0;;;;:::o;910:1325::-;1014:4;1102:21;:36;1124:13;1102:36;;;;;;;;;;;;;;;;;;;;;1101:37;1093:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1253:10;;1236:13;:27;;1228:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1382:13;1419;;;;;;;;;;;1434;1408:40;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1408:40:15;;;1398:51;;;;;;1382:67;;1527:38;1547:5;1554:10;1527:19;:38::i;:::-;1519:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1664:32;1711:13;;;;;;;;;;;1664:61;;1735:20;:31;;;1767:13;1735:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1735:46:15;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1735:46:15;;;;1946:4;1907:21;:36;1929:13;1907:36;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;1994;2011:13;2026:10;1994:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;2115:1;2103:9;:13;2099:130;;;2137:44;2170:10;2137:44;;;;;;;;;;;;;;;;;;;;;;2209:9;2195:10;;:23;;;;;;;;;;;2099:130;910:1325;;;;;;:::o;2241:148::-;4233:9;:21;4243:10;4233:21;;;;;;;;;;;;;;;;;;;;;;;;;4225:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2298:10:::1;:19;;:31;2318:10;;2298:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39::::0;24:38:::1;77:16;74:1;67:27;5:2;2298:31:15;2344:38;2358:10;2370;;2344:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;2241:148::o:0;416:50::-;;;;;;;;;;;;;;;;;;;;;;:::o;369:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;2672:1189::-;2764:4;2780:9;2799;2818:7;2898:2;2877:10;:17;:23;2873:66;;2923:5;2916:12;;;;;;;2873:66;3241:2;3229:10;3225:19;3219:26;3214:31;;3285:2;3273:10;3269:19;3263:26;3258:31;;3337:2;3325:10;3321:19;3315:26;3312:1;3307:35;3302:40;;3460:2;3456:1;:6;;;3452:44;;;3483:2;3478:7;;;;3452:44;3577:2;3572:1;:7;;;;:18;;;;;3588:2;3583:1;:7;;;;3572:18;3568:287;;;3613:5;3606:12;;;;;;;3568:287;3709:9;:135;3719:124;3809:5;3756:59;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3756:59:15;;;3729:104;;;;;;3835:1;3838;3841;3719:124;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3719:124:15;;;;;;;;3709:135;;;;;;;;;;;;;;;;;;;;;;;;;3702:142;;;;;2672:1189;;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"./FakeMeebits.sol\";\n\ncontract FakeMeebitsClaimer {\n    event UpdateWhitelist(address _account, bool _value);\n    event aTokenWasClaimed(uint _tokenNumber, address _tokenClaimer);\n    event yeeeeeeaaaaaahThxCoeurCoeurCoeur(address _tipper);\n    event withdrawFunds(address _withdrawer, uint _funds);\n\n    mapping(address => bool) public whitelist;\n    mapping(uint => bool) public tokensThatWereClaimed;\n\n    uint maxTokenId;\n    uint totalFunds;\n    address ERC721address;\n\n    constructor(uint _maxTokenId, address _ERC721address) public {\n        whitelist[msg.sender] = true;\n        maxTokenId = _maxTokenId;\n        ERC721address = _ERC721address;\n    }\n\n    fallback () external payable {\n        if (msg.value > 0) {\n            totalFunds += msg.value;\n            emit yeeeeeeaaaaaahThxCoeurCoeurCoeur(msg.sender);\n        }\n    }\n\n    function claimAToken(uint _tokenToClaim, bytes memory _signature) \n    public \n    payable\n    returns (bool)\n    {\n\n        // Checking if the token has already been claimed\n        require(!tokensThatWereClaimed[_tokenToClaim], \"Claim: token already claimed\");\n        // Not sure this is useful but oh well\n        require(_tokenToClaim <= maxTokenId, \"Claim: tokenId outbounds\");\n        // Creating a hash unique to this token number, and this token contract\n        bytes32 _hash = keccak256(abi.encode(ERC721address, _tokenToClaim));\n        // Making sure that the signer has been whitelisted\n        require(signerIsWhitelisted(_hash, _signature), \"Claim: signer not whitelisted\");\n        // All should be good, so we mint a token yeah\n        FakeMeebits targetERC721Contract = FakeMeebits(ERC721address);\n        targetERC721Contract.mintAToken(_tokenToClaim);\n\n        // Registering that the token was claimed\n        // Note that there is a check in the ERC721 for this too\n        tokensThatWereClaimed[_tokenToClaim] = true;\n        // Emitting an event\n        emit aTokenWasClaimed(_tokenToClaim, msg.sender);\n\n        // If a tip was included, thank the tipper\n        if (msg.value > 0) {\n            emit yeeeeeeaaaaaahThxCoeurCoeurCoeur(msg.sender);\n            totalFunds += msg.value;\n        }\n    }\n\n    function withdrawTips() public onlyWhitelisted {\n        msg.sender.transfer(totalFunds);\n        emit withdrawFunds(msg.sender, totalFunds );\n    }\n\n\n    // 20/02/27: Borrowed from https://github.com/austintgriffith/bouncer-proxy/blob/master/BouncerProxy/BouncerProxy.sol\n    // borrowed from OpenZeppelin's ESDA stuff:\n    // https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/cryptography/ECDSA.sol\n    function signerIsWhitelisted(bytes32 _hash, bytes memory _signature) internal view returns (bool) {\n        bytes32 r;\n        bytes32 s;\n        uint8 v;\n        // Check the signature length\n        if (_signature.length != 65) {\n            return false;\n        }\n        // Divide the signature in r, s and v variables\n        // ecrecover takes the signature parameters, and the only way to get them\n        // currently is to use assembly.\n        // solium-disable-next-line security/no-inline-assembly\n        assembly {\n            r := mload(add(_signature, 32))\n            s := mload(add(_signature, 64))\n            v := byte(0, mload(add(_signature, 96)))\n        }\n        // Version of signature should be 27 or 28, but 0 and 1 are also possible versions\n        if (v < 27) {\n            v += 27;\n        }\n        // If the version is correct return the signer address\n        if (v != 27 && v != 28) {\n            return false;\n        } else {\n            // solium-disable-next-line arg-overflow\n            return whitelist[ecrecover(keccak256(\n                abi.encodePacked(\"\\x19Ethereum Signed Message:\\n32\", _hash)\n                ), v, r, s)];\n        }\n    }\n\n    //  20/02/27: Borrowed from https://github.com/rocksideio/contracts/blob/master/contracts/Identity.sol\n    function updateWhitelist(address _account, bool _value) onlyWhitelisted public returns (bool) {\n        whitelist[_account] = _value;\n        emit UpdateWhitelist(_account, _value);\n        return true;\n    }\n\n    modifier onlyWhitelisted() {\n        require(whitelist[msg.sender], \"Account Not Whitelisted\");\n        _;\n    }\n}\n",
    "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeMeebitsClaimer.sol",
    "ast": {
      "absolutePath": "project:/contracts/FakeMeebitsClaimer.sol",
      "exportedSymbols": {
        "FakeMeebitsClaimer": [
          3298
        ]
      },
      "id": 3299,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 3013,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:15"
        },
        {
          "absolutePath": "project:/contracts/FakeMeebits.sol",
          "file": "./FakeMeebits.sol",
          "id": 3014,
          "nodeType": "ImportDirective",
          "scope": 3299,
          "sourceUnit": 3012,
          "src": "57:27:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 3298,
          "linearizedBaseContracts": [
            3298
          ],
          "name": "FakeMeebitsClaimer",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 3020,
              "name": "UpdateWhitelist",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 3019,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3016,
                    "indexed": false,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3020,
                    "src": "142:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3015,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "142:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3018,
                    "indexed": false,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3020,
                    "src": "160:11:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3017,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "160:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "141:31:15"
              },
              "src": "120:53:15"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 3026,
              "name": "aTokenWasClaimed",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 3025,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3022,
                    "indexed": false,
                    "name": "_tokenNumber",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3026,
                    "src": "201:17:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3021,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "201:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3024,
                    "indexed": false,
                    "name": "_tokenClaimer",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3026,
                    "src": "220:21:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3023,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "220:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "200:42:15"
              },
              "src": "178:65:15"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 3030,
              "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 3029,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3028,
                    "indexed": false,
                    "name": "_tipper",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3030,
                    "src": "287:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3027,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "287:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "286:17:15"
              },
              "src": "248:56:15"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 3036,
              "name": "withdrawFunds",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 3035,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3032,
                    "indexed": false,
                    "name": "_withdrawer",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3036,
                    "src": "329:19:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3031,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "329:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3034,
                    "indexed": false,
                    "name": "_funds",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3036,
                    "src": "350:11:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3033,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "350:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "328:34:15"
              },
              "src": "309:54:15"
            },
            {
              "constant": false,
              "functionSelector": "9b19251a",
              "id": 3040,
              "name": "whitelist",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3298,
              "src": "369:41:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 3039,
                "keyType": {
                  "id": 3037,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "377:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "369:24:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 3038,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "388:4:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4a80edcb",
              "id": 3044,
              "name": "tokensThatWereClaimed",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3298,
              "src": "416:50:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "typeName": {
                "id": 3043,
                "keyType": {
                  "id": 3041,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "424:4:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "416:21:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                  "typeString": "mapping(uint256 => bool)"
                },
                "valueType": {
                  "id": 3042,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "432:4:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 3046,
              "name": "maxTokenId",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3298,
              "src": "473:15:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3045,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "473:4:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 3048,
              "name": "totalFunds",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3298,
              "src": "494:15:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3047,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "494:4:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 3050,
              "name": "ERC721address",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3298,
              "src": "515:21:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 3049,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "515:7:15",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 3072,
                "nodeType": "Block",
                "src": "604:119:15",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3057,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3040,
                          "src": "614:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 3060,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3058,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "624:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3059,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "624:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "614:21:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 3061,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "638:4:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "614:28:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3063,
                    "nodeType": "ExpressionStatement",
                    "src": "614:28:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 3064,
                        "name": "maxTokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3046,
                        "src": "652:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 3065,
                        "name": "_maxTokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3052,
                        "src": "665:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "652:24:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3067,
                    "nodeType": "ExpressionStatement",
                    "src": "652:24:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 3068,
                        "name": "ERC721address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3050,
                        "src": "686:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 3069,
                        "name": "_ERC721address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3054,
                        "src": "702:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "686:30:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3071,
                    "nodeType": "ExpressionStatement",
                    "src": "686:30:15"
                  }
                ]
              },
              "documentation": null,
              "id": 3073,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3055,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3052,
                    "name": "_maxTokenId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3073,
                    "src": "555:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3051,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "555:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3054,
                    "name": "_ERC721address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3073,
                    "src": "573:22:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3053,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "573:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "554:42:15"
              },
              "returnParameters": {
                "id": 3056,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "604:0:15"
              },
              "scope": 3298,
              "src": "543:180:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3092,
                "nodeType": "Block",
                "src": "758:146:15",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3079,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3076,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "772:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3077,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "772:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 3078,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "784:1:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "772:13:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 3091,
                    "nodeType": "IfStatement",
                    "src": "768:130:15",
                    "trueBody": {
                      "id": 3090,
                      "nodeType": "Block",
                      "src": "787:111:15",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 3083,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 3080,
                              "name": "totalFunds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3048,
                              "src": "801:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3081,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "815:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "815:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "801:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 3084,
                          "nodeType": "ExpressionStatement",
                          "src": "801:23:15"
                        },
                        {
                          "eventCall": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 3086,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "876:3:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 3087,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "876:10:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "id": 3085,
                              "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3030,
                              "src": "843:32:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                "typeString": "function (address)"
                              }
                            },
                            "id": 3088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "843:44:15",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 3089,
                          "nodeType": "EmitStatement",
                          "src": "838:49:15"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "id": 3093,
              "implemented": true,
              "kind": "fallback",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3074,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "738:2:15"
              },
              "returnParameters": {
                "id": 3075,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "758:0:15"
              },
              "scope": 3298,
              "src": "729:175:15",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 3175,
                "nodeType": "Block",
                "src": "1024:1211:15",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1101:37:15",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3103,
                              "name": "tokensThatWereClaimed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3044,
                              "src": "1102:21:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                              }
                            },
                            "id": 3105,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3104,
                              "name": "_tokenToClaim",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3095,
                              "src": "1124:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1102:36:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "436c61696d3a20746f6b656e20616c726561647920636c61696d6564",
                          "id": 3107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1140:30:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_337c2282379537db254a77fd23f2e4c119b7ca868bb9c6d72297f9e0d0d8035b",
                            "typeString": "literal_string \"Claim: token already claimed\""
                          },
                          "value": "Claim: token already claimed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_337c2282379537db254a77fd23f2e4c119b7ca868bb9c6d72297f9e0d0d8035b",
                            "typeString": "literal_string \"Claim: token already claimed\""
                          }
                        ],
                        "id": 3102,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1093:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1093:78:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3109,
                    "nodeType": "ExpressionStatement",
                    "src": "1093:78:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 3111,
                            "name": "_tokenToClaim",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3095,
                            "src": "1236:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 3112,
                            "name": "maxTokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3046,
                            "src": "1253:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1236:27:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "436c61696d3a20746f6b656e4964206f7574626f756e6473",
                          "id": 3114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1265:26:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d06de1650893762b6903ecd0d1ec58e2cf2461121fb3af5cef9fa2626f28e30a",
                            "typeString": "literal_string \"Claim: tokenId outbounds\""
                          },
                          "value": "Claim: tokenId outbounds"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_d06de1650893762b6903ecd0d1ec58e2cf2461121fb3af5cef9fa2626f28e30a",
                            "typeString": "literal_string \"Claim: tokenId outbounds\""
                          }
                        ],
                        "id": 3110,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1228:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1228:64:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3116,
                    "nodeType": "ExpressionStatement",
                    "src": "1228:64:15"
                  },
                  {
                    "assignments": [
                      3118
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 3118,
                        "name": "_hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3175,
                        "src": "1382:13:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 3117,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1382:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 3126,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3122,
                              "name": "ERC721address",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3050,
                              "src": "1419:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3123,
                              "name": "_tokenToClaim",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3095,
                              "src": "1434:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 3120,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1408:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 3121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1408:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 3124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1408:40:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 3119,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1398:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 3125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1398:51:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1382:67:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3129,
                              "name": "_hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3118,
                              "src": "1547:5:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3130,
                              "name": "_signature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3097,
                              "src": "1554:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 3128,
                            "name": "signerIsWhitelisted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3260,
                            "src": "1527:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (bytes32,bytes memory) view returns (bool)"
                            }
                          },
                          "id": 3131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1527:38:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "436c61696d3a207369676e6572206e6f742077686974656c6973746564",
                          "id": 3132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1567:31:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_38d22e001cfc2cf75ca4365ae5c400259c4c5a5e496de5ca478129028519683f",
                            "typeString": "literal_string \"Claim: signer not whitelisted\""
                          },
                          "value": "Claim: signer not whitelisted"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_38d22e001cfc2cf75ca4365ae5c400259c4c5a5e496de5ca478129028519683f",
                            "typeString": "literal_string \"Claim: signer not whitelisted\""
                          }
                        ],
                        "id": 3127,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1519:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3133,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1519:80:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3134,
                    "nodeType": "ExpressionStatement",
                    "src": "1519:80:15"
                  },
                  {
                    "assignments": [
                      3136
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 3136,
                        "name": "targetERC721Contract",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3175,
                        "src": "1664:32:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                          "typeString": "contract FakeMeebits"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 3135,
                          "name": "FakeMeebits",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 3011,
                          "src": "1664:11:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                            "typeString": "contract FakeMeebits"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 3140,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3138,
                          "name": "ERC721address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3050,
                          "src": "1711:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 3137,
                        "name": "FakeMeebits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3011,
                        "src": "1699:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FakeMeebits_$3011_$",
                          "typeString": "type(contract FakeMeebits)"
                        }
                      },
                      "id": 3139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1699:26:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                        "typeString": "contract FakeMeebits"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1664:61:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3144,
                          "name": "_tokenToClaim",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3095,
                          "src": "1767:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 3141,
                          "name": "targetERC721Contract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3136,
                          "src": "1735:20:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                            "typeString": "contract FakeMeebits"
                          }
                        },
                        "id": 3143,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "mintAToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2982,
                        "src": "1735:31:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) external"
                        }
                      },
                      "id": 3145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1735:46:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3146,
                    "nodeType": "ExpressionStatement",
                    "src": "1735:46:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3147,
                          "name": "tokensThatWereClaimed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3044,
                          "src": "1907:21:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                            "typeString": "mapping(uint256 => bool)"
                          }
                        },
                        "id": 3149,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3148,
                          "name": "_tokenToClaim",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3095,
                          "src": "1929:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1907:36:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 3150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1946:4:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "1907:43:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3152,
                    "nodeType": "ExpressionStatement",
                    "src": "1907:43:15"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3154,
                          "name": "_tokenToClaim",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3095,
                          "src": "2011:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3155,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2026:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2026:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 3153,
                        "name": "aTokenWasClaimed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3026,
                        "src": "1994:16:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,address)"
                        }
                      },
                      "id": 3157,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1994:43:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3158,
                    "nodeType": "EmitStatement",
                    "src": "1989:48:15"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3159,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2103:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2103:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 3161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2115:1:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "2103:13:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 3174,
                    "nodeType": "IfStatement",
                    "src": "2099:130:15",
                    "trueBody": {
                      "id": 3173,
                      "nodeType": "Block",
                      "src": "2118:111:15",
                      "statements": [
                        {
                          "eventCall": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 3164,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2170:3:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 3165,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2170:10:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "id": 3163,
                              "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3030,
                              "src": "2137:32:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                "typeString": "function (address)"
                              }
                            },
                            "id": 3166,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2137:44:15",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 3167,
                          "nodeType": "EmitStatement",
                          "src": "2132:49:15"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 3171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 3168,
                              "name": "totalFunds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3048,
                              "src": "2195:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3169,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2209:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3170,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2209:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2195:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 3172,
                          "nodeType": "ExpressionStatement",
                          "src": "2195:23:15"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "255dee64",
              "id": 3176,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "claimAToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3098,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3095,
                    "name": "_tokenToClaim",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3176,
                    "src": "931:18:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3094,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "931:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3097,
                    "name": "_signature",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3176,
                    "src": "951:23:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 3096,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "951:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "930:45:15"
              },
              "returnParameters": {
                "id": 3101,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3100,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3176,
                    "src": "1014:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3099,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1014:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1013:6:15"
              },
              "scope": 3298,
              "src": "910:1325:15",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3195,
                "nodeType": "Block",
                "src": "2288:101:15",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3186,
                          "name": "totalFunds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3048,
                          "src": "2318:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3181,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2298:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2298:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 3185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2298:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 3187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2298:31:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3188,
                    "nodeType": "ExpressionStatement",
                    "src": "2298:31:15"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3190,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2358:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2358:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 3192,
                          "name": "totalFunds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3048,
                          "src": "2370:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 3189,
                        "name": "withdrawFunds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3036,
                        "src": "2344:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 3193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2344:38:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3194,
                    "nodeType": "EmitStatement",
                    "src": "2339:43:15"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "3aaa74b2",
              "id": 3196,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 3179,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 3178,
                    "name": "onlyWhitelisted",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3297,
                    "src": "2272:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2272:15:15"
                }
              ],
              "name": "withdrawTips",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3177,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2262:2:15"
              },
              "returnParameters": {
                "id": 3180,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2288:0:15"
              },
              "scope": 3298,
              "src": "2241:148:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3259,
                "nodeType": "Block",
                "src": "2770:1091:15",
                "statements": [
                  {
                    "assignments": [
                      3206
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 3206,
                        "name": "r",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3259,
                        "src": "2780:9:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 3205,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "2780:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 3207,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2780:9:15"
                  },
                  {
                    "assignments": [
                      3209
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 3209,
                        "name": "s",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3259,
                        "src": "2799:9:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 3208,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "2799:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 3210,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2799:9:15"
                  },
                  {
                    "assignments": [
                      3212
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 3212,
                        "name": "v",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3259,
                        "src": "2818:7:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 3211,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2818:5:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 3213,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2818:7:15"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3214,
                          "name": "_signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3200,
                          "src": "2877:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 3215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2877:17:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3635",
                        "id": 3216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2898:2:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_65_by_1",
                          "typeString": "int_const 65"
                        },
                        "value": "65"
                      },
                      "src": "2877:23:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 3221,
                    "nodeType": "IfStatement",
                    "src": "2873:66:15",
                    "trueBody": {
                      "id": 3220,
                      "nodeType": "Block",
                      "src": "2902:37:15",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 3218,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2923:5:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "functionReturnParameters": 3204,
                          "id": 3219,
                          "nodeType": "Return",
                          "src": "2916:12:15"
                        }
                      ]
                    }
                  },
                  {
                    "AST": {
                      "nodeType": "YulBlock",
                      "src": "3200:152:15",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "3214:31:15",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_signature",
                                    "nodeType": "YulIdentifier",
                                    "src": "3229:10:15"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3241:2:15",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3225:3:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3225:19:15"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "3219:5:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3219:26:15"
                          },
                          "variableNames": [
                            {
                              "name": "r",
                              "nodeType": "YulIdentifier",
                              "src": "3214:1:15"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "3258:31:15",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_signature",
                                    "nodeType": "YulIdentifier",
                                    "src": "3273:10:15"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3285:2:15",
                                    "type": "",
                                    "value": "64"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3269:3:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3269:19:15"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "3263:5:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3263:26:15"
                          },
                          "variableNames": [
                            {
                              "name": "s",
                              "nodeType": "YulIdentifier",
                              "src": "3258:1:15"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "3302:40:15",
                          "value": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3312:1:15",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "_signature",
                                        "nodeType": "YulIdentifier",
                                        "src": "3325:10:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3337:2:15",
                                        "type": "",
                                        "value": "96"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3321:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3321:19:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "3315:5:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3315:26:15"
                              }
                            ],
                            "functionName": {
                              "name": "byte",
                              "nodeType": "YulIdentifier",
                              "src": "3307:4:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3307:35:15"
                          },
                          "variableNames": [
                            {
                              "name": "v",
                              "nodeType": "YulIdentifier",
                              "src": "3302:1:15"
                            }
                          ]
                        }
                      ]
                    },
                    "evmVersion": "istanbul",
                    "externalReferences": [
                      {
                        "declaration": 3200,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3229:10:15",
                        "valueSize": 1
                      },
                      {
                        "declaration": 3200,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3273:10:15",
                        "valueSize": 1
                      },
                      {
                        "declaration": 3200,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3325:10:15",
                        "valueSize": 1
                      },
                      {
                        "declaration": 3206,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3214:1:15",
                        "valueSize": 1
                      },
                      {
                        "declaration": 3209,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3258:1:15",
                        "valueSize": 1
                      },
                      {
                        "declaration": 3212,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3302:1:15",
                        "valueSize": 1
                      }
                    ],
                    "id": 3222,
                    "nodeType": "InlineAssembly",
                    "src": "3191:161:15"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 3225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 3223,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3212,
                        "src": "3456:1:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3237",
                        "id": 3224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3460:2:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_27_by_1",
                          "typeString": "int_const 27"
                        },
                        "value": "27"
                      },
                      "src": "3456:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 3231,
                    "nodeType": "IfStatement",
                    "src": "3452:44:15",
                    "trueBody": {
                      "id": 3230,
                      "nodeType": "Block",
                      "src": "3464:32:15",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 3228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 3226,
                              "name": "v",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3212,
                              "src": "3478:1:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "hexValue": "3237",
                              "id": 3227,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3483:2:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_27_by_1",
                                "typeString": "int_const 27"
                              },
                              "value": "27"
                            },
                            "src": "3478:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "id": 3229,
                          "nodeType": "ExpressionStatement",
                          "src": "3478:7:15"
                        }
                      ]
                    }
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 3238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 3234,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3232,
                          "name": "v",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3212,
                          "src": "3572:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3237",
                          "id": 3233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3577:2:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_27_by_1",
                            "typeString": "int_const 27"
                          },
                          "value": "27"
                        },
                        "src": "3572:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 3237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3235,
                          "name": "v",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3212,
                          "src": "3583:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3238",
                          "id": 3236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3588:2:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_28_by_1",
                            "typeString": "int_const 28"
                          },
                          "value": "28"
                        },
                        "src": "3583:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "3572:18:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 3257,
                      "nodeType": "Block",
                      "src": "3635:220:15",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3242,
                              "name": "whitelist",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3040,
                              "src": "3709:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 3255,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "hexValue": "19457468657265756d205369676e6564204d6573736167653a0a3332",
                                          "id": 3247,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "string",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3773:34:15",
                                          "subdenomination": null,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                            "typeString": "literal_string \"\u0019Ethereum Signed Message:\n32\""
                                          },
                                          "value": "\u0019Ethereum Signed Message:\n32"
                                        },
                                        {
                                          "argumentTypes": null,
                                          "id": 3248,
                                          "name": "_hash",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 3198,
                                          "src": "3809:5:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                            "typeString": "literal_string \"\u0019Ethereum Signed Message:\n32\""
                                          },
                                          {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 3245,
                                          "name": "abi",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -1,
                                          "src": "3756:3:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_abi",
                                            "typeString": "abi"
                                          }
                                        },
                                        "id": 3246,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberName": "encodePacked",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3756:16:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                          "typeString": "function () pure returns (bytes memory)"
                                        }
                                      },
                                      "id": 3249,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3756:59:15",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    ],
                                    "id": 3244,
                                    "name": "keccak256",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -8,
                                    "src": "3729:9:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                      "typeString": "function (bytes memory) pure returns (bytes32)"
                                    }
                                  },
                                  "id": 3250,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3729:104:15",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 3251,
                                  "name": "v",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3212,
                                  "src": "3835:1:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 3252,
                                  "name": "r",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3206,
                                  "src": "3838:1:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 3253,
                                  "name": "s",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3209,
                                  "src": "3841:1:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 3243,
                                "name": "ecrecover",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -6,
                                "src": "3719:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                                  "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                                }
                              },
                              "id": 3254,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3719:124:15",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3709:135:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "functionReturnParameters": 3204,
                          "id": 3256,
                          "nodeType": "Return",
                          "src": "3702:142:15"
                        }
                      ]
                    },
                    "id": 3258,
                    "nodeType": "IfStatement",
                    "src": "3568:287:15",
                    "trueBody": {
                      "id": 3241,
                      "nodeType": "Block",
                      "src": "3592:37:15",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 3239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3613:5:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "functionReturnParameters": 3204,
                          "id": 3240,
                          "nodeType": "Return",
                          "src": "3606:12:15"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "id": 3260,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "signerIsWhitelisted",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3201,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3198,
                    "name": "_hash",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3260,
                    "src": "2701:13:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 3197,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2701:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3200,
                    "name": "_signature",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3260,
                    "src": "2716:23:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 3199,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "2716:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2700:40:15"
              },
              "returnParameters": {
                "id": 3204,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3203,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3260,
                    "src": "2764:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3202,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2764:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2763:6:15"
              },
              "scope": 3298,
              "src": "2672:1189:15",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 3284,
                "nodeType": "Block",
                "src": "4068:114:15",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3275,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3271,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3040,
                          "src": "4078:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 3273,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3272,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3262,
                          "src": "4088:8:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4078:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 3274,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3264,
                        "src": "4100:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "4078:28:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3276,
                    "nodeType": "ExpressionStatement",
                    "src": "4078:28:15"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3278,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3262,
                          "src": "4137:8:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 3279,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3264,
                          "src": "4147:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 3277,
                        "name": "UpdateWhitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3020,
                        "src": "4121:15:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bool_$returns$__$",
                          "typeString": "function (address,bool)"
                        }
                      },
                      "id": 3280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4121:33:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3281,
                    "nodeType": "EmitStatement",
                    "src": "4116:38:15"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 3282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4171:4:15",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 3270,
                    "id": 3283,
                    "nodeType": "Return",
                    "src": "4164:11:15"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "0d392cd9",
              "id": 3285,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 3267,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 3266,
                    "name": "onlyWhitelisted",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3297,
                    "src": "4030:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "4030:15:15"
                }
              ],
              "name": "updateWhitelist",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3265,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3262,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3285,
                    "src": "3999:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3261,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3999:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3264,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3285,
                    "src": "4017:11:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3263,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4017:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3998:31:15"
              },
              "returnParameters": {
                "id": 3270,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3269,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3285,
                    "src": "4062:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3268,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4062:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4061:6:15"
              },
              "scope": 3298,
              "src": "3974:208:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3296,
                "nodeType": "Block",
                "src": "4215:85:15",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3288,
                            "name": "whitelist",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3040,
                            "src": "4233:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 3291,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3289,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4243:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4243:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4233:21:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4163636f756e74204e6f742057686974656c6973746564",
                          "id": 3292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4256:25:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                            "typeString": "literal_string \"Account Not Whitelisted\""
                          },
                          "value": "Account Not Whitelisted"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                            "typeString": "literal_string \"Account Not Whitelisted\""
                          }
                        ],
                        "id": 3287,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4225:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4225:57:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3294,
                    "nodeType": "ExpressionStatement",
                    "src": "4225:57:15"
                  },
                  {
                    "id": 3295,
                    "nodeType": "PlaceholderStatement",
                    "src": "4292:1:15"
                  }
                ]
              },
              "documentation": null,
              "id": 3297,
              "name": "onlyWhitelisted",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 3286,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4212:2:15"
              },
              "src": "4188:112:15",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 3299,
          "src": "86:4216:15"
        }
      ],
      "src": "32:4271:15"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/FakeMeebitsClaimer.sol",
        "exportedSymbols": {
          "FakeMeebitsClaimer": [
            3298
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.6",
              ".2"
            ]
          },
          "id": 3013,
          "name": "PragmaDirective",
          "src": "32:23:15"
        },
        {
          "attributes": {
            "SourceUnit": 3012,
            "absolutePath": "project:/contracts/FakeMeebits.sol",
            "file": "./FakeMeebits.sol",
            "scope": 3299,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 3014,
          "name": "ImportDirective",
          "src": "57:27:15"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              3298
            ],
            "name": "FakeMeebitsClaimer",
            "scope": 3299
          },
          "children": [
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "UpdateWhitelist"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_account",
                        "overrides": null,
                        "scope": 3020,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3015,
                          "name": "ElementaryTypeName",
                          "src": "142:7:15"
                        }
                      ],
                      "id": 3016,
                      "name": "VariableDeclaration",
                      "src": "142:16:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_value",
                        "overrides": null,
                        "scope": 3020,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3017,
                          "name": "ElementaryTypeName",
                          "src": "160:4:15"
                        }
                      ],
                      "id": 3018,
                      "name": "VariableDeclaration",
                      "src": "160:11:15"
                    }
                  ],
                  "id": 3019,
                  "name": "ParameterList",
                  "src": "141:31:15"
                }
              ],
              "id": 3020,
              "name": "EventDefinition",
              "src": "120:53:15"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "aTokenWasClaimed"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_tokenNumber",
                        "overrides": null,
                        "scope": 3026,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3021,
                          "name": "ElementaryTypeName",
                          "src": "201:4:15"
                        }
                      ],
                      "id": 3022,
                      "name": "VariableDeclaration",
                      "src": "201:17:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_tokenClaimer",
                        "overrides": null,
                        "scope": 3026,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3023,
                          "name": "ElementaryTypeName",
                          "src": "220:7:15"
                        }
                      ],
                      "id": 3024,
                      "name": "VariableDeclaration",
                      "src": "220:21:15"
                    }
                  ],
                  "id": 3025,
                  "name": "ParameterList",
                  "src": "200:42:15"
                }
              ],
              "id": 3026,
              "name": "EventDefinition",
              "src": "178:65:15"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_tipper",
                        "overrides": null,
                        "scope": 3030,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3027,
                          "name": "ElementaryTypeName",
                          "src": "287:7:15"
                        }
                      ],
                      "id": 3028,
                      "name": "VariableDeclaration",
                      "src": "287:15:15"
                    }
                  ],
                  "id": 3029,
                  "name": "ParameterList",
                  "src": "286:17:15"
                }
              ],
              "id": 3030,
              "name": "EventDefinition",
              "src": "248:56:15"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "withdrawFunds"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_withdrawer",
                        "overrides": null,
                        "scope": 3036,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3031,
                          "name": "ElementaryTypeName",
                          "src": "329:7:15"
                        }
                      ],
                      "id": 3032,
                      "name": "VariableDeclaration",
                      "src": "329:19:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_funds",
                        "overrides": null,
                        "scope": 3036,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3033,
                          "name": "ElementaryTypeName",
                          "src": "350:4:15"
                        }
                      ],
                      "id": 3034,
                      "name": "VariableDeclaration",
                      "src": "350:11:15"
                    }
                  ],
                  "id": 3035,
                  "name": "ParameterList",
                  "src": "328:34:15"
                }
              ],
              "id": 3036,
              "name": "EventDefinition",
              "src": "309:54:15"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "9b19251a",
                "name": "whitelist",
                "overrides": null,
                "scope": 3298,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => bool)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => bool)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 3037,
                      "name": "ElementaryTypeName",
                      "src": "377:7:15"
                    },
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 3038,
                      "name": "ElementaryTypeName",
                      "src": "388:4:15"
                    }
                  ],
                  "id": 3039,
                  "name": "Mapping",
                  "src": "369:24:15"
                }
              ],
              "id": 3040,
              "name": "VariableDeclaration",
              "src": "369:41:15"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "4a80edcb",
                "name": "tokensThatWereClaimed",
                "overrides": null,
                "scope": 3298,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(uint256 => bool)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(uint256 => bool)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 3041,
                      "name": "ElementaryTypeName",
                      "src": "424:4:15"
                    },
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 3042,
                      "name": "ElementaryTypeName",
                      "src": "432:4:15"
                    }
                  ],
                  "id": 3043,
                  "name": "Mapping",
                  "src": "416:21:15"
                }
              ],
              "id": 3044,
              "name": "VariableDeclaration",
              "src": "416:50:15"
            },
            {
              "attributes": {
                "constant": false,
                "name": "maxTokenId",
                "overrides": null,
                "scope": 3298,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint",
                    "type": "uint256"
                  },
                  "id": 3045,
                  "name": "ElementaryTypeName",
                  "src": "473:4:15"
                }
              ],
              "id": 3046,
              "name": "VariableDeclaration",
              "src": "473:15:15"
            },
            {
              "attributes": {
                "constant": false,
                "name": "totalFunds",
                "overrides": null,
                "scope": 3298,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint",
                    "type": "uint256"
                  },
                  "id": 3047,
                  "name": "ElementaryTypeName",
                  "src": "494:4:15"
                }
              ],
              "id": 3048,
              "name": "VariableDeclaration",
              "src": "494:15:15"
            },
            {
              "attributes": {
                "constant": false,
                "name": "ERC721address",
                "overrides": null,
                "scope": 3298,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address",
                "value": null,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "name": "address",
                    "stateMutability": "nonpayable",
                    "type": "address"
                  },
                  "id": 3049,
                  "name": "ElementaryTypeName",
                  "src": "515:7:15"
                }
              ],
              "id": 3050,
              "name": "VariableDeclaration",
              "src": "515:21:15"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "modifiers": [
                  null
                ],
                "name": "",
                "overrides": null,
                "scope": 3298,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_maxTokenId",
                        "overrides": null,
                        "scope": 3073,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3051,
                          "name": "ElementaryTypeName",
                          "src": "555:4:15"
                        }
                      ],
                      "id": 3052,
                      "name": "VariableDeclaration",
                      "src": "555:16:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_ERC721address",
                        "overrides": null,
                        "scope": 3073,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3053,
                          "name": "ElementaryTypeName",
                          "src": "573:7:15"
                        }
                      ],
                      "id": 3054,
                      "name": "VariableDeclaration",
                      "src": "573:22:15"
                    }
                  ],
                  "id": 3055,
                  "name": "ParameterList",
                  "src": "554:42:15"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3056,
                  "name": "ParameterList",
                  "src": "604:0:15"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3040,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 3057,
                                  "name": "Identifier",
                                  "src": "614:9:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3058,
                                      "name": "Identifier",
                                      "src": "624:3:15"
                                    }
                                  ],
                                  "id": 3059,
                                  "name": "MemberAccess",
                                  "src": "624:10:15"
                                }
                              ],
                              "id": 3060,
                              "name": "IndexAccess",
                              "src": "614:21:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "74727565",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "true"
                              },
                              "id": 3061,
                              "name": "Literal",
                              "src": "638:4:15"
                            }
                          ],
                          "id": 3062,
                          "name": "Assignment",
                          "src": "614:28:15"
                        }
                      ],
                      "id": 3063,
                      "name": "ExpressionStatement",
                      "src": "614:28:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3046,
                                "type": "uint256",
                                "value": "maxTokenId"
                              },
                              "id": 3064,
                              "name": "Identifier",
                              "src": "652:10:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3052,
                                "type": "uint256",
                                "value": "_maxTokenId"
                              },
                              "id": 3065,
                              "name": "Identifier",
                              "src": "665:11:15"
                            }
                          ],
                          "id": 3066,
                          "name": "Assignment",
                          "src": "652:24:15"
                        }
                      ],
                      "id": 3067,
                      "name": "ExpressionStatement",
                      "src": "652:24:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3050,
                                "type": "address",
                                "value": "ERC721address"
                              },
                              "id": 3068,
                              "name": "Identifier",
                              "src": "686:13:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3054,
                                "type": "address",
                                "value": "_ERC721address"
                              },
                              "id": 3069,
                              "name": "Identifier",
                              "src": "702:14:15"
                            }
                          ],
                          "id": 3070,
                          "name": "Assignment",
                          "src": "686:30:15"
                        }
                      ],
                      "id": 3071,
                      "name": "ExpressionStatement",
                      "src": "686:30:15"
                    }
                  ],
                  "id": 3072,
                  "name": "Block",
                  "src": "604:119:15"
                }
              ],
              "id": 3073,
              "name": "FunctionDefinition",
              "src": "543:180:15"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "fallback",
                "modifiers": [
                  null
                ],
                "name": "",
                "overrides": null,
                "scope": 3298,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3074,
                  "name": "ParameterList",
                  "src": "738:2:15"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3075,
                  "name": "ParameterList",
                  "src": "758:0:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": ">",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3076,
                                  "name": "Identifier",
                                  "src": "772:3:15"
                                }
                              ],
                              "id": 3077,
                              "name": "MemberAccess",
                              "src": "772:9:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 3078,
                              "name": "Literal",
                              "src": "784:1:15"
                            }
                          ],
                          "id": 3079,
                          "name": "BinaryOperation",
                          "src": "772:13:15"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "+=",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3048,
                                        "type": "uint256",
                                        "value": "totalFunds"
                                      },
                                      "id": 3080,
                                      "name": "Identifier",
                                      "src": "801:10:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "value",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3081,
                                          "name": "Identifier",
                                          "src": "815:3:15"
                                        }
                                      ],
                                      "id": 3082,
                                      "name": "MemberAccess",
                                      "src": "815:9:15"
                                    }
                                  ],
                                  "id": 3083,
                                  "name": "Assignment",
                                  "src": "801:23:15"
                                }
                              ],
                              "id": 3084,
                              "name": "ExpressionStatement",
                              "src": "801:23:15"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "tuple()",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3030,
                                        "type": "function (address)",
                                        "value": "yeeeeeeaaaaaahThxCoeurCoeurCoeur"
                                      },
                                      "id": 3085,
                                      "name": "Identifier",
                                      "src": "843:32:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3086,
                                          "name": "Identifier",
                                          "src": "876:3:15"
                                        }
                                      ],
                                      "id": 3087,
                                      "name": "MemberAccess",
                                      "src": "876:10:15"
                                    }
                                  ],
                                  "id": 3088,
                                  "name": "FunctionCall",
                                  "src": "843:44:15"
                                }
                              ],
                              "id": 3089,
                              "name": "EmitStatement",
                              "src": "838:49:15"
                            }
                          ],
                          "id": 3090,
                          "name": "Block",
                          "src": "787:111:15"
                        }
                      ],
                      "id": 3091,
                      "name": "IfStatement",
                      "src": "768:130:15"
                    }
                  ],
                  "id": 3092,
                  "name": "Block",
                  "src": "758:146:15"
                }
              ],
              "id": 3093,
              "name": "FunctionDefinition",
              "src": "729:175:15"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "255dee64",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "claimAToken",
                "overrides": null,
                "scope": 3298,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_tokenToClaim",
                        "overrides": null,
                        "scope": 3176,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3094,
                          "name": "ElementaryTypeName",
                          "src": "931:4:15"
                        }
                      ],
                      "id": 3095,
                      "name": "VariableDeclaration",
                      "src": "931:18:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_signature",
                        "overrides": null,
                        "scope": 3176,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes",
                            "type": "bytes"
                          },
                          "id": 3096,
                          "name": "ElementaryTypeName",
                          "src": "951:5:15"
                        }
                      ],
                      "id": 3097,
                      "name": "VariableDeclaration",
                      "src": "951:23:15"
                    }
                  ],
                  "id": 3098,
                  "name": "ParameterList",
                  "src": "930:45:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 3176,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3099,
                          "name": "ElementaryTypeName",
                          "src": "1014:4:15"
                        }
                      ],
                      "id": 3100,
                      "name": "VariableDeclaration",
                      "src": "1014:4:15"
                    }
                  ],
                  "id": 3101,
                  "name": "ParameterList",
                  "src": "1013:6:15"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_337c2282379537db254a77fd23f2e4c119b7ca868bb9c6d72297f9e0d0d8035b",
                                    "typeString": "literal_string \"Claim: token already claimed\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3102,
                              "name": "Identifier",
                              "src": "1093:7:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!",
                                "prefix": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3044,
                                        "type": "mapping(uint256 => bool)",
                                        "value": "tokensThatWereClaimed"
                                      },
                                      "id": 3103,
                                      "name": "Identifier",
                                      "src": "1102:21:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3095,
                                        "type": "uint256",
                                        "value": "_tokenToClaim"
                                      },
                                      "id": 3104,
                                      "name": "Identifier",
                                      "src": "1124:13:15"
                                    }
                                  ],
                                  "id": 3105,
                                  "name": "IndexAccess",
                                  "src": "1102:36:15"
                                }
                              ],
                              "id": 3106,
                              "name": "UnaryOperation",
                              "src": "1101:37:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "436c61696d3a20746f6b656e20616c726561647920636c61696d6564",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Claim: token already claimed\"",
                                "value": "Claim: token already claimed"
                              },
                              "id": 3107,
                              "name": "Literal",
                              "src": "1140:30:15"
                            }
                          ],
                          "id": 3108,
                          "name": "FunctionCall",
                          "src": "1093:78:15"
                        }
                      ],
                      "id": 3109,
                      "name": "ExpressionStatement",
                      "src": "1093:78:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_d06de1650893762b6903ecd0d1ec58e2cf2461121fb3af5cef9fa2626f28e30a",
                                    "typeString": "literal_string \"Claim: tokenId outbounds\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3110,
                              "name": "Identifier",
                              "src": "1228:7:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "<=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3095,
                                    "type": "uint256",
                                    "value": "_tokenToClaim"
                                  },
                                  "id": 3111,
                                  "name": "Identifier",
                                  "src": "1236:13:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3046,
                                    "type": "uint256",
                                    "value": "maxTokenId"
                                  },
                                  "id": 3112,
                                  "name": "Identifier",
                                  "src": "1253:10:15"
                                }
                              ],
                              "id": 3113,
                              "name": "BinaryOperation",
                              "src": "1236:27:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "436c61696d3a20746f6b656e4964206f7574626f756e6473",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Claim: tokenId outbounds\"",
                                "value": "Claim: tokenId outbounds"
                              },
                              "id": 3114,
                              "name": "Literal",
                              "src": "1265:26:15"
                            }
                          ],
                          "id": 3115,
                          "name": "FunctionCall",
                          "src": "1228:64:15"
                        }
                      ],
                      "id": 3116,
                      "name": "ExpressionStatement",
                      "src": "1228:64:15"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          3118
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_hash",
                            "overrides": null,
                            "scope": 3175,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bytes32",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 3117,
                              "name": "ElementaryTypeName",
                              "src": "1382:7:15"
                            }
                          ],
                          "id": 3118,
                          "name": "VariableDeclaration",
                          "src": "1382:13:15"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "bytes32",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": -8,
                                "type": "function (bytes memory) pure returns (bytes32)",
                                "value": "keccak256"
                              },
                              "id": 3119,
                              "name": "Identifier",
                              "src": "1398:9:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "bytes memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "member_name": "encode",
                                    "referencedDeclaration": null,
                                    "type": "function () pure returns (bytes memory)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -1,
                                        "type": "abi",
                                        "value": "abi"
                                      },
                                      "id": 3120,
                                      "name": "Identifier",
                                      "src": "1408:3:15"
                                    }
                                  ],
                                  "id": 3121,
                                  "name": "MemberAccess",
                                  "src": "1408:10:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3050,
                                    "type": "address",
                                    "value": "ERC721address"
                                  },
                                  "id": 3122,
                                  "name": "Identifier",
                                  "src": "1419:13:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3095,
                                    "type": "uint256",
                                    "value": "_tokenToClaim"
                                  },
                                  "id": 3123,
                                  "name": "Identifier",
                                  "src": "1434:13:15"
                                }
                              ],
                              "id": 3124,
                              "name": "FunctionCall",
                              "src": "1408:40:15"
                            }
                          ],
                          "id": 3125,
                          "name": "FunctionCall",
                          "src": "1398:51:15"
                        }
                      ],
                      "id": 3126,
                      "name": "VariableDeclarationStatement",
                      "src": "1382:67:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_38d22e001cfc2cf75ca4365ae5c400259c4c5a5e496de5ca478129028519683f",
                                    "typeString": "literal_string \"Claim: signer not whitelisted\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3127,
                              "name": "Identifier",
                              "src": "1519:7:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "bool",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3260,
                                    "type": "function (bytes32,bytes memory) view returns (bool)",
                                    "value": "signerIsWhitelisted"
                                  },
                                  "id": 3128,
                                  "name": "Identifier",
                                  "src": "1527:19:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3118,
                                    "type": "bytes32",
                                    "value": "_hash"
                                  },
                                  "id": 3129,
                                  "name": "Identifier",
                                  "src": "1547:5:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3097,
                                    "type": "bytes memory",
                                    "value": "_signature"
                                  },
                                  "id": 3130,
                                  "name": "Identifier",
                                  "src": "1554:10:15"
                                }
                              ],
                              "id": 3131,
                              "name": "FunctionCall",
                              "src": "1527:38:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "436c61696d3a207369676e6572206e6f742077686974656c6973746564",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Claim: signer not whitelisted\"",
                                "value": "Claim: signer not whitelisted"
                              },
                              "id": 3132,
                              "name": "Literal",
                              "src": "1567:31:15"
                            }
                          ],
                          "id": 3133,
                          "name": "FunctionCall",
                          "src": "1519:80:15"
                        }
                      ],
                      "id": 3134,
                      "name": "ExpressionStatement",
                      "src": "1519:80:15"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          3136
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "targetERC721Contract",
                            "overrides": null,
                            "scope": 3175,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "contract FakeMeebits",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "FakeMeebits",
                                "referencedDeclaration": 3011,
                                "type": "contract FakeMeebits"
                              },
                              "id": 3135,
                              "name": "UserDefinedTypeName",
                              "src": "1664:11:15"
                            }
                          ],
                          "id": 3136,
                          "name": "VariableDeclaration",
                          "src": "1664:32:15"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "contract FakeMeebits",
                            "type_conversion": true
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3011,
                                "type": "type(contract FakeMeebits)",
                                "value": "FakeMeebits"
                              },
                              "id": 3137,
                              "name": "Identifier",
                              "src": "1699:11:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3050,
                                "type": "address",
                                "value": "ERC721address"
                              },
                              "id": 3138,
                              "name": "Identifier",
                              "src": "1711:13:15"
                            }
                          ],
                          "id": 3139,
                          "name": "FunctionCall",
                          "src": "1699:26:15"
                        }
                      ],
                      "id": 3140,
                      "name": "VariableDeclarationStatement",
                      "src": "1664:61:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "mintAToken",
                                "referencedDeclaration": 2982,
                                "type": "function (uint256) external"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3136,
                                    "type": "contract FakeMeebits",
                                    "value": "targetERC721Contract"
                                  },
                                  "id": 3141,
                                  "name": "Identifier",
                                  "src": "1735:20:15"
                                }
                              ],
                              "id": 3143,
                              "name": "MemberAccess",
                              "src": "1735:31:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3095,
                                "type": "uint256",
                                "value": "_tokenToClaim"
                              },
                              "id": 3144,
                              "name": "Identifier",
                              "src": "1767:13:15"
                            }
                          ],
                          "id": 3145,
                          "name": "FunctionCall",
                          "src": "1735:46:15"
                        }
                      ],
                      "id": 3146,
                      "name": "ExpressionStatement",
                      "src": "1735:46:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3044,
                                    "type": "mapping(uint256 => bool)",
                                    "value": "tokensThatWereClaimed"
                                  },
                                  "id": 3147,
                                  "name": "Identifier",
                                  "src": "1907:21:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3095,
                                    "type": "uint256",
                                    "value": "_tokenToClaim"
                                  },
                                  "id": 3148,
                                  "name": "Identifier",
                                  "src": "1929:13:15"
                                }
                              ],
                              "id": 3149,
                              "name": "IndexAccess",
                              "src": "1907:36:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "74727565",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "true"
                              },
                              "id": 3150,
                              "name": "Literal",
                              "src": "1946:4:15"
                            }
                          ],
                          "id": 3151,
                          "name": "Assignment",
                          "src": "1907:43:15"
                        }
                      ],
                      "id": 3152,
                      "name": "ExpressionStatement",
                      "src": "1907:43:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3026,
                                "type": "function (uint256,address)",
                                "value": "aTokenWasClaimed"
                              },
                              "id": 3153,
                              "name": "Identifier",
                              "src": "1994:16:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3095,
                                "type": "uint256",
                                "value": "_tokenToClaim"
                              },
                              "id": 3154,
                              "name": "Identifier",
                              "src": "2011:13:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3155,
                                  "name": "Identifier",
                                  "src": "2026:3:15"
                                }
                              ],
                              "id": 3156,
                              "name": "MemberAccess",
                              "src": "2026:10:15"
                            }
                          ],
                          "id": 3157,
                          "name": "FunctionCall",
                          "src": "1994:43:15"
                        }
                      ],
                      "id": 3158,
                      "name": "EmitStatement",
                      "src": "1989:48:15"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": ">",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3159,
                                  "name": "Identifier",
                                  "src": "2103:3:15"
                                }
                              ],
                              "id": 3160,
                              "name": "MemberAccess",
                              "src": "2103:9:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 3161,
                              "name": "Literal",
                              "src": "2115:1:15"
                            }
                          ],
                          "id": 3162,
                          "name": "BinaryOperation",
                          "src": "2103:13:15"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "tuple()",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3030,
                                        "type": "function (address)",
                                        "value": "yeeeeeeaaaaaahThxCoeurCoeurCoeur"
                                      },
                                      "id": 3163,
                                      "name": "Identifier",
                                      "src": "2137:32:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3164,
                                          "name": "Identifier",
                                          "src": "2170:3:15"
                                        }
                                      ],
                                      "id": 3165,
                                      "name": "MemberAccess",
                                      "src": "2170:10:15"
                                    }
                                  ],
                                  "id": 3166,
                                  "name": "FunctionCall",
                                  "src": "2137:44:15"
                                }
                              ],
                              "id": 3167,
                              "name": "EmitStatement",
                              "src": "2132:49:15"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "+=",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3048,
                                        "type": "uint256",
                                        "value": "totalFunds"
                                      },
                                      "id": 3168,
                                      "name": "Identifier",
                                      "src": "2195:10:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "value",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3169,
                                          "name": "Identifier",
                                          "src": "2209:3:15"
                                        }
                                      ],
                                      "id": 3170,
                                      "name": "MemberAccess",
                                      "src": "2209:9:15"
                                    }
                                  ],
                                  "id": 3171,
                                  "name": "Assignment",
                                  "src": "2195:23:15"
                                }
                              ],
                              "id": 3172,
                              "name": "ExpressionStatement",
                              "src": "2195:23:15"
                            }
                          ],
                          "id": 3173,
                          "name": "Block",
                          "src": "2118:111:15"
                        }
                      ],
                      "id": 3174,
                      "name": "IfStatement",
                      "src": "2099:130:15"
                    }
                  ],
                  "id": 3175,
                  "name": "Block",
                  "src": "1024:1211:15"
                }
              ],
              "id": 3176,
              "name": "FunctionDefinition",
              "src": "910:1325:15"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "3aaa74b2",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "name": "withdrawTips",
                "overrides": null,
                "scope": 3298,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3177,
                  "name": "ParameterList",
                  "src": "2262:2:15"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3180,
                  "name": "ParameterList",
                  "src": "2288:0:15"
                },
                {
                  "attributes": {
                    "arguments": null
                  },
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 3297,
                        "type": "modifier ()",
                        "value": "onlyWhitelisted"
                      },
                      "id": 3178,
                      "name": "Identifier",
                      "src": "2272:15:15"
                    }
                  ],
                  "id": 3179,
                  "name": "ModifierInvocation",
                  "src": "2272:15:15"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "transfer",
                                "referencedDeclaration": null,
                                "type": "function (uint256)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3181,
                                      "name": "Identifier",
                                      "src": "2298:3:15"
                                    }
                                  ],
                                  "id": 3184,
                                  "name": "MemberAccess",
                                  "src": "2298:10:15"
                                }
                              ],
                              "id": 3185,
                              "name": "MemberAccess",
                              "src": "2298:19:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3048,
                                "type": "uint256",
                                "value": "totalFunds"
                              },
                              "id": 3186,
                              "name": "Identifier",
                              "src": "2318:10:15"
                            }
                          ],
                          "id": 3187,
                          "name": "FunctionCall",
                          "src": "2298:31:15"
                        }
                      ],
                      "id": 3188,
                      "name": "ExpressionStatement",
                      "src": "2298:31:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3036,
                                "type": "function (address,uint256)",
                                "value": "withdrawFunds"
                              },
                              "id": 3189,
                              "name": "Identifier",
                              "src": "2344:13:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3190,
                                  "name": "Identifier",
                                  "src": "2358:3:15"
                                }
                              ],
                              "id": 3191,
                              "name": "MemberAccess",
                              "src": "2358:10:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3048,
                                "type": "uint256",
                                "value": "totalFunds"
                              },
                              "id": 3192,
                              "name": "Identifier",
                              "src": "2370:10:15"
                            }
                          ],
                          "id": 3193,
                          "name": "FunctionCall",
                          "src": "2344:38:15"
                        }
                      ],
                      "id": 3194,
                      "name": "EmitStatement",
                      "src": "2339:43:15"
                    }
                  ],
                  "id": 3195,
                  "name": "Block",
                  "src": "2288:101:15"
                }
              ],
              "id": 3196,
              "name": "FunctionDefinition",
              "src": "2241:148:15"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "signerIsWhitelisted",
                "overrides": null,
                "scope": 3298,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "internal"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_hash",
                        "overrides": null,
                        "scope": 3260,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 3197,
                          "name": "ElementaryTypeName",
                          "src": "2701:7:15"
                        }
                      ],
                      "id": 3198,
                      "name": "VariableDeclaration",
                      "src": "2701:13:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_signature",
                        "overrides": null,
                        "scope": 3260,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes",
                            "type": "bytes"
                          },
                          "id": 3199,
                          "name": "ElementaryTypeName",
                          "src": "2716:5:15"
                        }
                      ],
                      "id": 3200,
                      "name": "VariableDeclaration",
                      "src": "2716:23:15"
                    }
                  ],
                  "id": 3201,
                  "name": "ParameterList",
                  "src": "2700:40:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 3260,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3202,
                          "name": "ElementaryTypeName",
                          "src": "2764:4:15"
                        }
                      ],
                      "id": 3203,
                      "name": "VariableDeclaration",
                      "src": "2764:4:15"
                    }
                  ],
                  "id": 3204,
                  "name": "ParameterList",
                  "src": "2763:6:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          3206
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "r",
                            "overrides": null,
                            "scope": 3259,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bytes32",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 3205,
                              "name": "ElementaryTypeName",
                              "src": "2780:7:15"
                            }
                          ],
                          "id": 3206,
                          "name": "VariableDeclaration",
                          "src": "2780:9:15"
                        }
                      ],
                      "id": 3207,
                      "name": "VariableDeclarationStatement",
                      "src": "2780:9:15"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          3209
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "s",
                            "overrides": null,
                            "scope": 3259,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bytes32",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 3208,
                              "name": "ElementaryTypeName",
                              "src": "2799:7:15"
                            }
                          ],
                          "id": 3209,
                          "name": "VariableDeclaration",
                          "src": "2799:9:15"
                        }
                      ],
                      "id": 3210,
                      "name": "VariableDeclarationStatement",
                      "src": "2799:9:15"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          3212
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "v",
                            "overrides": null,
                            "scope": 3259,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint8",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint8",
                                "type": "uint8"
                              },
                              "id": 3211,
                              "name": "ElementaryTypeName",
                              "src": "2818:5:15"
                            }
                          ],
                          "id": 3212,
                          "name": "VariableDeclaration",
                          "src": "2818:7:15"
                        }
                      ],
                      "id": 3213,
                      "name": "VariableDeclarationStatement",
                      "src": "2818:7:15"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "!=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3200,
                                    "type": "bytes memory",
                                    "value": "_signature"
                                  },
                                  "id": 3214,
                                  "name": "Identifier",
                                  "src": "2877:10:15"
                                }
                              ],
                              "id": 3215,
                              "name": "MemberAccess",
                              "src": "2877:17:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "3635",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 65",
                                "value": "65"
                              },
                              "id": 3216,
                              "name": "Literal",
                              "src": "2898:2:15"
                            }
                          ],
                          "id": 3217,
                          "name": "BinaryOperation",
                          "src": "2877:23:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "functionReturnParameters": 3204
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "66616c7365",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "bool",
                                    "type": "bool",
                                    "value": "false"
                                  },
                                  "id": 3218,
                                  "name": "Literal",
                                  "src": "2923:5:15"
                                }
                              ],
                              "id": 3219,
                              "name": "Return",
                              "src": "2916:12:15"
                            }
                          ],
                          "id": 3220,
                          "name": "Block",
                          "src": "2902:37:15"
                        }
                      ],
                      "id": 3221,
                      "name": "IfStatement",
                      "src": "2873:66:15"
                    },
                    {
                      "attributes": {
                        "evmVersion": "istanbul",
                        "externalReferences": [
                          {
                            "declaration": 3200,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3229:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3200,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3273:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3200,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3325:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3206,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3214:1:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3209,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3258:1:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3212,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3302:1:15",
                            "valueSize": 1
                          }
                        ],
                        "operations": "{\n    r := mload(add(_signature, 32))\n    s := mload(add(_signature, 64))\n    v := byte(0, mload(add(_signature, 96)))\n}"
                      },
                      "children": [],
                      "id": 3222,
                      "name": "InlineAssembly",
                      "src": "3191:161:15"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3212,
                                "type": "uint8",
                                "value": "v"
                              },
                              "id": 3223,
                              "name": "Identifier",
                              "src": "3456:1:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "3237",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 27",
                                "value": "27"
                              },
                              "id": 3224,
                              "name": "Literal",
                              "src": "3460:2:15"
                            }
                          ],
                          "id": 3225,
                          "name": "BinaryOperation",
                          "src": "3456:6:15"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "+=",
                                    "type": "uint8"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3212,
                                        "type": "uint8",
                                        "value": "v"
                                      },
                                      "id": 3226,
                                      "name": "Identifier",
                                      "src": "3478:1:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "3237",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 27",
                                        "value": "27"
                                      },
                                      "id": 3227,
                                      "name": "Literal",
                                      "src": "3483:2:15"
                                    }
                                  ],
                                  "id": 3228,
                                  "name": "Assignment",
                                  "src": "3478:7:15"
                                }
                              ],
                              "id": 3229,
                              "name": "ExpressionStatement",
                              "src": "3478:7:15"
                            }
                          ],
                          "id": 3230,
                          "name": "Block",
                          "src": "3464:32:15"
                        }
                      ],
                      "id": 3231,
                      "name": "IfStatement",
                      "src": "3452:44:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "&&",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3212,
                                    "type": "uint8",
                                    "value": "v"
                                  },
                                  "id": 3232,
                                  "name": "Identifier",
                                  "src": "3572:1:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "3237",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 27",
                                    "value": "27"
                                  },
                                  "id": 3233,
                                  "name": "Literal",
                                  "src": "3577:2:15"
                                }
                              ],
                              "id": 3234,
                              "name": "BinaryOperation",
                              "src": "3572:7:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3212,
                                    "type": "uint8",
                                    "value": "v"
                                  },
                                  "id": 3235,
                                  "name": "Identifier",
                                  "src": "3583:1:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "3238",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 28",
                                    "value": "28"
                                  },
                                  "id": 3236,
                                  "name": "Literal",
                                  "src": "3588:2:15"
                                }
                              ],
                              "id": 3237,
                              "name": "BinaryOperation",
                              "src": "3583:7:15"
                            }
                          ],
                          "id": 3238,
                          "name": "BinaryOperation",
                          "src": "3572:18:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "functionReturnParameters": 3204
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "66616c7365",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "bool",
                                    "type": "bool",
                                    "value": "false"
                                  },
                                  "id": 3239,
                                  "name": "Literal",
                                  "src": "3613:5:15"
                                }
                              ],
                              "id": 3240,
                              "name": "Return",
                              "src": "3606:12:15"
                            }
                          ],
                          "id": 3241,
                          "name": "Block",
                          "src": "3592:37:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "functionReturnParameters": 3204
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3040,
                                        "type": "mapping(address => bool)",
                                        "value": "whitelist"
                                      },
                                      "id": 3242,
                                      "name": "Identifier",
                                      "src": "3709:9:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "address",
                                        "type_conversion": false
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              },
                                              {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                              },
                                              {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              },
                                              {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              }
                                            ],
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -6,
                                            "type": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)",
                                            "value": "ecrecover"
                                          },
                                          "id": 3243,
                                          "name": "Identifier",
                                          "src": "3719:9:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "isStructConstructorCall": false,
                                            "lValueRequested": false,
                                            "names": [
                                              null
                                            ],
                                            "tryCall": false,
                                            "type": "bytes32",
                                            "type_conversion": false
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                  }
                                                ],
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -8,
                                                "type": "function (bytes memory) pure returns (bytes32)",
                                                "value": "keccak256"
                                              },
                                              "id": 3244,
                                              "name": "Identifier",
                                              "src": "3729:9:15"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "isStructConstructorCall": false,
                                                "lValueRequested": false,
                                                "names": [
                                                  null
                                                ],
                                                "tryCall": false,
                                                "type": "bytes memory",
                                                "type_conversion": false
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": [
                                                      {
                                                        "typeIdentifier": "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                                        "typeString": "literal_string \"\u0019Ethereum Signed Message:\n32\""
                                                      },
                                                      {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                      }
                                                    ],
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "member_name": "encodePacked",
                                                    "referencedDeclaration": null,
                                                    "type": "function () pure returns (bytes memory)"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": -1,
                                                        "type": "abi",
                                                        "value": "abi"
                                                      },
                                                      "id": 3245,
                                                      "name": "Identifier",
                                                      "src": "3756:3:15"
                                                    }
                                                  ],
                                                  "id": 3246,
                                                  "name": "MemberAccess",
                                                  "src": "3756:16:15"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "hexvalue": "19457468657265756d205369676e6564204d6573736167653a0a3332",
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "subdenomination": null,
                                                    "token": "string",
                                                    "type": "literal_string \"\u0019Ethereum Signed Message:\n32\"",
                                                    "value": "\u0019Ethereum Signed Message:\n32"
                                                  },
                                                  "id": 3247,
                                                  "name": "Literal",
                                                  "src": "3773:34:15"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 3198,
                                                    "type": "bytes32",
                                                    "value": "_hash"
                                                  },
                                                  "id": 3248,
                                                  "name": "Identifier",
                                                  "src": "3809:5:15"
                                                }
                                              ],
                                              "id": 3249,
                                              "name": "FunctionCall",
                                              "src": "3756:59:15"
                                            }
                                          ],
                                          "id": 3250,
                                          "name": "FunctionCall",
                                          "src": "3729:104:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3212,
                                            "type": "uint8",
                                            "value": "v"
                                          },
                                          "id": 3251,
                                          "name": "Identifier",
                                          "src": "3835:1:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3206,
                                            "type": "bytes32",
                                            "value": "r"
                                          },
                                          "id": 3252,
                                          "name": "Identifier",
                                          "src": "3838:1:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3209,
                                            "type": "bytes32",
                                            "value": "s"
                                          },
                                          "id": 3253,
                                          "name": "Identifier",
                                          "src": "3841:1:15"
                                        }
                                      ],
                                      "id": 3254,
                                      "name": "FunctionCall",
                                      "src": "3719:124:15"
                                    }
                                  ],
                                  "id": 3255,
                                  "name": "IndexAccess",
                                  "src": "3709:135:15"
                                }
                              ],
                              "id": 3256,
                              "name": "Return",
                              "src": "3702:142:15"
                            }
                          ],
                          "id": 3257,
                          "name": "Block",
                          "src": "3635:220:15"
                        }
                      ],
                      "id": 3258,
                      "name": "IfStatement",
                      "src": "3568:287:15"
                    }
                  ],
                  "id": 3259,
                  "name": "Block",
                  "src": "2770:1091:15"
                }
              ],
              "id": 3260,
              "name": "FunctionDefinition",
              "src": "2672:1189:15"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "0d392cd9",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "name": "updateWhitelist",
                "overrides": null,
                "scope": 3298,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_account",
                        "overrides": null,
                        "scope": 3285,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3261,
                          "name": "ElementaryTypeName",
                          "src": "3999:7:15"
                        }
                      ],
                      "id": 3262,
                      "name": "VariableDeclaration",
                      "src": "3999:16:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_value",
                        "overrides": null,
                        "scope": 3285,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3263,
                          "name": "ElementaryTypeName",
                          "src": "4017:4:15"
                        }
                      ],
                      "id": 3264,
                      "name": "VariableDeclaration",
                      "src": "4017:11:15"
                    }
                  ],
                  "id": 3265,
                  "name": "ParameterList",
                  "src": "3998:31:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 3285,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3268,
                          "name": "ElementaryTypeName",
                          "src": "4062:4:15"
                        }
                      ],
                      "id": 3269,
                      "name": "VariableDeclaration",
                      "src": "4062:4:15"
                    }
                  ],
                  "id": 3270,
                  "name": "ParameterList",
                  "src": "4061:6:15"
                },
                {
                  "attributes": {
                    "arguments": null
                  },
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 3297,
                        "type": "modifier ()",
                        "value": "onlyWhitelisted"
                      },
                      "id": 3266,
                      "name": "Identifier",
                      "src": "4030:15:15"
                    }
                  ],
                  "id": 3267,
                  "name": "ModifierInvocation",
                  "src": "4030:15:15"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3040,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 3271,
                                  "name": "Identifier",
                                  "src": "4078:9:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3262,
                                    "type": "address",
                                    "value": "_account"
                                  },
                                  "id": 3272,
                                  "name": "Identifier",
                                  "src": "4088:8:15"
                                }
                              ],
                              "id": 3273,
                              "name": "IndexAccess",
                              "src": "4078:19:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3264,
                                "type": "bool",
                                "value": "_value"
                              },
                              "id": 3274,
                              "name": "Identifier",
                              "src": "4100:6:15"
                            }
                          ],
                          "id": 3275,
                          "name": "Assignment",
                          "src": "4078:28:15"
                        }
                      ],
                      "id": 3276,
                      "name": "ExpressionStatement",
                      "src": "4078:28:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3020,
                                "type": "function (address,bool)",
                                "value": "UpdateWhitelist"
                              },
                              "id": 3277,
                              "name": "Identifier",
                              "src": "4121:15:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3262,
                                "type": "address",
                                "value": "_account"
                              },
                              "id": 3278,
                              "name": "Identifier",
                              "src": "4137:8:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3264,
                                "type": "bool",
                                "value": "_value"
                              },
                              "id": 3279,
                              "name": "Identifier",
                              "src": "4147:6:15"
                            }
                          ],
                          "id": 3280,
                          "name": "FunctionCall",
                          "src": "4121:33:15"
                        }
                      ],
                      "id": 3281,
                      "name": "EmitStatement",
                      "src": "4116:38:15"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 3270
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 3282,
                          "name": "Literal",
                          "src": "4171:4:15"
                        }
                      ],
                      "id": 3283,
                      "name": "Return",
                      "src": "4164:11:15"
                    }
                  ],
                  "id": 3284,
                  "name": "Block",
                  "src": "4068:114:15"
                }
              ],
              "id": 3285,
              "name": "FunctionDefinition",
              "src": "3974:208:15"
            },
            {
              "attributes": {
                "documentation": null,
                "name": "onlyWhitelisted",
                "overrides": null,
                "virtual": false,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3286,
                  "name": "ParameterList",
                  "src": "4212:2:15"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                                    "typeString": "literal_string \"Account Not Whitelisted\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3287,
                              "name": "Identifier",
                              "src": "4225:7:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3040,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 3288,
                                  "name": "Identifier",
                                  "src": "4233:9:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3289,
                                      "name": "Identifier",
                                      "src": "4243:3:15"
                                    }
                                  ],
                                  "id": 3290,
                                  "name": "MemberAccess",
                                  "src": "4243:10:15"
                                }
                              ],
                              "id": 3291,
                              "name": "IndexAccess",
                              "src": "4233:21:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4163636f756e74204e6f742057686974656c6973746564",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Account Not Whitelisted\"",
                                "value": "Account Not Whitelisted"
                              },
                              "id": 3292,
                              "name": "Literal",
                              "src": "4256:25:15"
                            }
                          ],
                          "id": 3293,
                          "name": "FunctionCall",
                          "src": "4225:57:15"
                        }
                      ],
                      "id": 3294,
                      "name": "ExpressionStatement",
                      "src": "4225:57:15"
                    },
                    {
                      "id": 3295,
                      "name": "PlaceholderStatement",
                      "src": "4292:1:15"
                    }
                  ],
                  "id": 3296,
                  "name": "Block",
                  "src": "4215:85:15"
                }
              ],
              "id": 3297,
              "name": "ModifierDefinition",
              "src": "4188:112:15"
            }
          ],
          "id": 3298,
          "name": "ContractDefinition",
          "src": "86:4216:15"
        }
      ],
      "id": 3299,
      "name": "SourceUnit",
      "src": "32:4271:15"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
    },
    "networks": {
      "4": {
        "events": {},
        "links": {},
        "address": "0x656eC82544a3464f07bB86bEA3447A4fdF489C1b",
        "transactionHash": "0x48cefb69ed27f9d636cb8cc6cd7c04aecbd794207de1580e28dc704c459da719"
      },
      "5777": {
        "events": {},
        "links": {},
        "address": "0x156E88B8b750bD7129054d853410A974b0488883",
        "transactionHash": "0x4fe960ae96a1882c4bc1f70478a98e8ad8d3782758b0e753152c701f270ae5c5"
      },
      "11155111": {
        "events": {},
        "links": {},
        "address": "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55",
        "transactionHash": "0xed51e877a2825fb67e7a2a1de5cb8dd8f31ad8f6ea0b0986b6fe2a3b31c53337"
      }
    },
    "schemaVersion": "3.4.11",
    "updatedAt": "2022-11-25T08:11:37.765Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }