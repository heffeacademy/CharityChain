// pages/index.js

// Import the useRouter hook from next/router to programmatically navigate between pages
import { useRouter } from 'next/router';
import { ConnectButton } from "@suiet/wallet-kit";

function App() {
    // Initialize the router object using the useRouter hook
    const router = useRouter();
    // Styles for the header container
    const headerStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '1rem 2rem',
      backgroundColor: '#f4f6f8'
   };
    // Styles for the main container to center its children and give a subtle background color
    const containerStyle = {
        display: 'flex',             // Use flex layout
        flexDirection: 'column',     // Arrange children vertically
        alignItems: 'center',        // Center children horizontally
        justifyContent: 'center',    // Center children vertically
        height: '100vh',             // Make container take the full viewport height
        backgroundColor: '#f4f6f8',  // A subtle background color
    };

    // Styles for the title (h1) to give it a modern typography look
    const titleStyle = {
        fontSize: '2.5rem',         // Set font size
        color: '#333',              // Set font color
        marginBottom: '20px',       // Add some margin to the bottom
        fontWeight: '600',          // Make font bold
        textAlign: 'center'         // Center text
    };

    // Styles for the buttons to give them a modern appearance with color transition on hover
    const buttonStyle = {
        backgroundColor: '#8F0820', // Set background color
        color: 'white',             // Set text color
        border: 'none',             // Remove border
        borderRadius: '8px',        // Add rounded corners
        padding: '10px 20px',       // Add padding for better appearance
        margin: '5px',              // Add margin between buttons
        cursor: 'pointer',          // Show pointer cursor on hover
        transition: 'background-color 0.3s', // Transition effect for background color
    };

    return(
        <div style={containerStyle}>
            {/*Use the title styles*/}
            <h1 style={titleStyle}>Welcome to the CharityChain Development Platform!</h1>
            <div>
                {/*Use the button styles and add onClick handler to navigate to the mint page*/}
                <button style={buttonStyle} onClick={() => router.push('/mint')}>Mint NFT</button>
                 {/*Use the button styles and add onClick handler to navigate to the collection page*/}
                <button style={buttonStyle} onClick={() => router.push('/tba')}>View Collection</button>
                {/*Use the button styles and add onClick handler to navigate to the vote page*/}
                <button style={buttonStyle} onClick={() => router.push('/tba')}>Vote on Proposals</button>
            </div>
        </div>
    );
}

// Export the HomePage component to be used by Next.js
export default App;
