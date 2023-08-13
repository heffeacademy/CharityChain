// pages/mint.js

function MintPage() {
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

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Mint Your NFT</h1>
            <div style={formStyle}>
                <input type="file" accept="image/*" style={inputStyle} />
                <input type="text" placeholder="Title" style={inputStyle} />
                <textarea placeholder="Description" rows="5" style={{ ...inputStyle, resize: 'none' }}></textarea>
                <button style={buttonStyle} type="submit">Mint</button>
            </div>
        </div>
    );
}

export default MintPage;
