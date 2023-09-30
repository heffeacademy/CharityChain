const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config({ path: '../.env.local' });
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// Configure multer to handle file uploads
const storage = multer.memoryStorage(); // storing files in memory
const upload = multer({ dest: 'uploads/' });

// const upload = multer({ storage: storage });

app.get('/test', (req, res) => {
    console.log('Test endpoint hit');
    res.send('Test successful');
});

app.post('/upload', upload.single('file'), async (req, res) => {
    console.log('IPFS endpoint hit...');
    const fileImg = req.file;
    console.log('File obtained from sender', fileImg);
    const file = req.file;
    const fs = require('fs');
    const JWT = process.env.JWT; 
    console.log('JWT: ', JWT); 
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    const formData = new FormData();
    formData.append('file', fs.createReadStream(file.path));

    // Send file to IPFS
    try {
        console.log("Moment of truth........")
        const returned = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                // JWT
                'Authorization': `Bearer ${JWT}`
            }
        });
        console.log('Data was sent to IPFS successfully.');
        console.log('Response IPFS Data:', returned.data);
        const imgHash = `ipfs://${returned.data.IpfsHash}`;
        console.log('File stored successfully');
        console.log(returned.data.IpfsHash);
        // res.json({ ipfsUrl: imgHash });
        res.json(returned.data);
    } catch (error) {
        console.error('Error uploading to IPFS: ',error);
        res.status(500).send('Error uploading to IPFS');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
