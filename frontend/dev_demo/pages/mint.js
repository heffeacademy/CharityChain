
import { useState, useEffect } from 'react';
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from '@suiet/wallet-kit';

//Connection to sui endpoint
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui.js/faucet';
const client = new SuiClient({ url: getFullnodeUrl('devnet') });

const mintNFT = async (nftFilePath, wallet) => {
    console.log('Minting.......');
    try {
        console.log('Sending file to be stored on the cloud.....');
        await sendFileToIPFS(nftFilePath);
        console.log('Sending file SUCCESS');
        console.log('account receiving devnet coins: ', wallet.account?.address);

        await requestSuiFromFaucetV0({
            host: getFaucetHost('testnet'),
            recipient: wallet.account?.address,
        });
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
};

const sendFileToIPFS = async (fileImg) => 
{
    console.log('File Image before sending request:', fileImg);

    if (!fileImg || !fileImg.file) {
        console.error('No file to send.');
        return;
    }
    const formData = new FormData();
    // Check if fileImg.file is already a Blob or File object
    // If it's not, you may need to convert it to a Blob or File object
    if (fileImg.file instanceof Blob || fileImg.file instanceof File) {
        formData.append('file', fileImg.file);
    } else {
        // Assume fileImg.file is a file path, convert it to a readable stream
        const fileStream = fs.createReadStream(fileImg.file);
        formData.append('file', fileStream);
    }
    console.log('Trying to send Request...');
        
    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData, // Use formData here
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Data was sent to the backend successfully.');
            console.log('Response Data:', data);
        } else {
            console.log('Failed to send data to the backend', response.status);
        }
    } catch (error) {
        console.error('Error sending data to backend for IPFS:', error);
    }
}


function MintPage() {
    const [nftFilePath, setnftFilePath] = useState("");
    const [nftCount, setNftCount] = useState(0);
    const [nfts, setNfts] = useState([]);
    const [values, setValues] = useState({
        imagePreviewUrl: "",
        picFile: null
    });

    const wallet = useWallet()
    useEffect(() => {
        if (!wallet.connected) return;
        console.log('connected wallet name: ', wallet.name)
        console.log('account address: ', wallet.account?.address)
        console.log('account publicKey: ', wallet.account?.publicKey)
    }, [wallet.connected])

    // Function to handle the click of the Mint button
    const handleMintClick = async () => {
        try {
            // Sending a GET request to the server's /test endpoint
            const response = await fetch('http://localhost:3000/test');
            
            // Checking if the response is successful
            if (response.ok) {
                // Parsing the response body as text
                const responseBody = await response.text();
                
                // Logging the response body to the console
                console.log('Successful query!', responseBody);
            } else {
                console.error('Error with response', response.status);
            }
        } catch (error) {
            console.error('Error fetching from /test:', error);
        }
    };

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

    // ... rest of the code remains the same

    const handleImageChange = (index, field, value, e) => {
        const updatedNfts = [...nfts];
        updatedNfts[index][field] = value;
        let reader = new FileReader();
        let inFile = e.target.files[0];
        reader.onload = () => {
            setValues({
                ...values,
                picFile: inFile,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(inFile);
        // setnftFilePath(value);
        setnftFilePath(inFile);
        setNfts(updatedNfts);
    };

    // ... rest of the code remains the same
    const allFieldsFilled = () => {
        return nfts.every(nft => nft.file && nft.title && nft.description);
    };
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Create Your LoveLock!</h1>
            <div style={connectStyle}>
                <ConnectButton>Connect!</ConnectButton>
            </div>

            <div style={formStyle}>
                <label>
                    Number of KindKeys to create:
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
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={inputStyle}
                                    onChange={e =>
                                        handleImageChange(index, 'file', e.target.files[0], e)
                                    }
                                />
                                <img src={values.imagePreviewUrl}
                                    alt="..." style={{ objectFit: 'cover' }} />
                            </div>
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
                {/* <button style={buttonStyle} type="button" onClick={handleMintClick}> Mint </button> */}
                <button style={buttonStyle} type="button" onClick={() => mintNFT(nfts[0], wallet)}>Mint</button>

            </div>
        </div>
    );
}

export default MintPage;
 
// IMPACKS