const config = {
    '1': {
        address: '0x67025805e2431921C8359A0E1C0c514cFF5fcFDB',
        abi: [{
            type: "event",
            name: "Approval",
            inputs: [{
                indexed: !0,
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                name: "value",
                type: "uint256"
            }]
        }, {
            type: "event",
            name: "Transfer",
            inputs: [{
                indexed: !0,
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                name: "value",
                type: "uint256"
            }]
        }, {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [{
                name: "owner",
                type: "address"
            }, {
                name: "spender",
                type: "address"
            }],
            outputs: [{
                name: "",
                type: "uint256"
            }]
        }, {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [{
                name: "spender",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bool"
            }]
        }, {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{
                name: "account",
                type: "address"
            }],
            outputs: [{
                name: "",
                type: "uint256"
            }]
        }, {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{
                name: "",
                type: "uint8"
            }]
        }, {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{
                name: "",
                type: "string"
            }]
        }, {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{
                name: "",
                type: "string"
            }]
        }, {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{
                name: "",
                type: "uint256"
            }]
        }, {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [{
                name: "recipient",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bool"
            }]
        }, {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [{
                name: "sender",
                type: "address"
            }, {
                name: "recipient",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bool"
            }]
        }]
    }
}

export default config;