import {
    ethers,
    Wallet,
    JsonRpcProvider,
    Contract,
    formatUnits,
    parseEther
} from 'ethers';
import abiConfig from './abi.js';
import fs from 'fs'
import scst from '@safe-global/safe-core-sdk-types';
const { OperationType } = scst;
import SafeProtocolApiKit from '@safe-global/api-kit'
import SafeProtocol from '@safe-global/protocol-kit'
const Safe = SafeProtocol.default
const SafeApiKit = SafeProtocolApiKit.default

const RPC_URL = 'https://sepolia.base.org'; //RPC base sepolia cok
const CONTRACT_ADDRESS_TAO = '0x67025805e2431921C8359A0E1C0c514cFF5fcFDB'; //ini contract TAO njing
const sepoliaProvider = new JsonRpcProvider(RPC_URL);
const data = "0x2a2705606xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" //pharse lu bjirrrr
const wallet = new Wallet(data, sepoliaProvider);
const walletAddress = wallet.address;

const apiKit = new SafeApiKit({
    chainId: 84532n, //chainid sepolia base
  })

const getsafesAddress = await apiKit.getSafesByOwner(walletAddress)
const mySafesAddress = getsafesAddress.safes[0]
console.log(`Safe Address : ${mySafesAddress}`)

const safeFactory = await Safe.init({
    provider: RPC_URL,
    signer: data,
    safeAddress: mySafesAddress
})

const contractAccess = new Contract(CONTRACT_ADDRESS_TAO, abiConfig['1'].abi, wallet);
const balance = await contractAccess.balanceOf(mySafesAddress);
console.log(`TAO Balance: ${formatUnits(balance, 18)} TAO`);

(async () => {
    fs.readFile('address.txt', async function(err, data) {
        if (err) throw err;
        const array = data.toString().replace(/\r/g, "").split('\n')
        for(let i = 0; i < array.length; i++) {
            try {
                console.log('');
                const recipientAddress = array[i]
                console.log(`Transfering 100 TAO to ${recipientAddress}!`)
                const transferEncodedData = contractAccess.interface.encodeFunctionData('transfer', [recipientAddress, parseEther("100")]);
                const safeTransactionData = {
                    to: CONTRACT_ADDRESS_TAO,
                    value: '0',
                    data: transferEncodedData,
                    operation: OperationType.Call
                }
                const safeTransaction = await safeFactory.createTransaction({
                    transactions: [safeTransactionData]
                })
                const safeTxHash = await safeFactory.getTransactionHash(safeTransaction)
                const signature = await safeFactory.signHash(safeTxHash) 
                await apiKit.proposeTransaction({
                    safeAddress: mySafesAddress,
                    safeTransactionData: safeTransaction.data,
                    safeTxHash,
                    senderAddress: walletAddress,
                    senderSignature: signature.data
                })
                const executetxResult = await safeFactory.executeTransaction(safeTransaction);
                console.log(`https://sepolia.basescan.org/tx/${executetxResult.hash}`)
            } catch (err) {
                console.log(err)
            }
        }
    })
})()