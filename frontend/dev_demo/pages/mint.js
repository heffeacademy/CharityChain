import { useState } from 'react';
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'f5b13436b998f3555b55f80146b7033a1410fc05e373f1f179fa645f452b5346'

//Connection to sui endpoint
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';
const provider = new JsonRpcProvider(denvetConnection);

const [nftFilePath, setnftFilePath] = useState("");
const [nftHash, setnftHash] = useState("");


const mintNFT = async () => {


    const wallet = useWallet()
    useEffect(() => {
        if (!wallet.connected) return;
        console.log('connected wallet name: ', wallet.name)
        console.log('account address: ', wallet.account?.address)
        console.log('account publicKey: ', wallet.account?.publicKey)
    }, [wallet.connected])
    try {

        //TODO: 

        const ipfsReturn = await sendFileToIPFS(nftFilePath);
        setnftHash(ipfsReturn["IpfsHash"])

        // TODO: CALL TO SUI JS 

        /**
         * TEST: SUI FAUCET */

        //get account info 
        console.log('account recieving devnet coins: ', wallet.account?.address)
        await provider.requestSuiFromFaucet(
            wallet.account?.address,
        );
        // const contractAddress = "YOUR_CONTRACT_ADDRESS";
        // const abi = []; // Your contract ABI

        // const contract = new web3.eth.Contract(abi, contractAddress);
        // const accounts = await web3.eth.getAccounts();

        // nfts.forEach(async (nft, index) => {
        //     await contract.methods.mintNFT(nft.file, nft.title, nft.description).send({ from: accounts[0] });
        // });
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
};

const sendFileToIPFS = async (fileImg) => {
    if (fileImg) {
        try {
            const formData = FormData();
            const fileName = fs.filename(fileImg)
            const file = fs.createReadStream(fileImg);
            formData.append("file", file);
            const pinataMetadata = JSON.stringify({
                name: fileName,
            });
            formData.append('pinataMetadata', pinataMetadata);
            const pinataOptions = JSON.stringify({
                cidVersion: 0,
            });
            formData.append('pinataOptions', pinataOptions);
            const returned = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/sendFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': '7eb90c5ff4ff938a3ec6',
                    'pinata_secret_api_key': 'f5b13436b998f3555b55f80146b7033a1410fc05e373f1f179fa645f452b5346',
                    'Content-Type': "multipart/form-data"
                },
            });
            const imgHash = `ipfs://${resFile.data.IpfsHash}`;
            console.log(imgHash);
        } catch (error) {
            console.log("Error sending file to IPFS: ");
            console.log(error);
        }
    }
}
// sendFileToIPFS();

function MintPage() {
    const [nftCount, setNftCount] = useState(0);
    const [nfts, setNfts] = useState([]);
    // Styles for the main container
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f4f6f8',
        height: '100vh'
    };

    // Styles for the title (h1)
    const titleStyle = {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '1rem',
        textAlign: 'center'
    };

    // Styles for the form container
    const formStyle = {
        width: '80%',
        maxWidth: '500px',
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0,0,0,0.1)'
    };

    // Styles for each form field
    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    // Styles for the button
    const buttonStyle = {
        padding: '10px 20px',
        background: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    };

    const connectStyle = {
        position: 'absolute',
        top: '10px',
        right: '200px',
        width: '100px',
        textAlign: 'right'
    };
    // Styles for the individual NFT box
    const nftBoxStyle = {
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem'
    };
    // Style for the NFT boxes container
    const nftBoxesContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow wrapping to the next line if needed
        justifyContent: 'space-between', // Evenly space the boxes
        gap: '1rem', // Space between each box
        marginTop: '1rem'
    };
    const handleNftCountChange = (e) => {
        const count = e.target.value;
        setNftCount(count);
        // Initialize state for each NFT
        setNfts(Array(count).fill({ file: null, title: "", description: "" }));
    };

    const handleInputChange = (index, field, value) => {
        const updatedNfts = [...nfts];
        updatedNfts[index][field] = value;
        if (field == 'file') {
            setnftFilePath(value);
        }
        setNfts(updatedNfts);
    };

    const allFieldsFilled = () => {
        return nfts.every(nft => nft.file && nft.title && nft.description);
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Mint Your NFT Collection!</h1>
            <div style={connectStyle}>
                <ConnectButton>Connect!</ConnectButton>
            </div>

            <div style={formStyle}>
                <label>
                    Number of NFTs to mint:
                    <select value={nftCount} onChange={handleNftCountChange} style={inputStyle}>
                        <option value="0">Select</option>
                        {[...Array(20).keys()].map(i => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </label>

                <div style={nftBoxesContainerStyle}>
                    {nfts.map((nft, index) => (
                        <div key={index} style={nftBoxStyle}>
                            <input
                                type="file"
                                accept="image/*"
                                style={inputStyle}
                                onChange={e => handleInputChange(index, 'file', e.target.files[0])}
                            />
                            <input
                                type="text"
                                placeholder={`Title ${index + 1}`}
                                style={inputStyle}
                                value={nft.title}
                                onChange={e => handleInputChange(index, 'title', e.target.value)}
                            />
                            <textarea
                                placeholder={`Description ${index + 1}`}
                                rows="5"
                                style={{ ...inputStyle, resize: 'none' }}
                                value={nft.description}
                                onChange={e => handleInputChange(index, 'description', e.target.value)}
                            ></textarea>
                        </div>
                    ))}
                </div>

                <button style={buttonStyle} type="button" onClick={mintNFT} disabled={!allFieldsFilled()}>Mint</button>
            </div>
        </div>
    );
}

export default MintPage;
