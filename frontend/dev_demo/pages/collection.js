// pages/collection.js
import NFTCard from '../components/NFTCard';

function CollectionPage() {
    // Dummy data for now
    const nfts = [
        { id: 1, title: "NFT 1", description: "This is NFT 1", imageUrl: "path_to_image_1" },
        // ... add more NFT data
    ];

    // Styles for the main container
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

    // Styles for the NFT grid layout
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Your Collection</h1>
            <div style={gridStyle}>
                {nfts.map(nft => (
                    <NFTCard key={nft.id} {...nft} />
                ))}
            </div>
        </div>
    );
}

export default CollectionPage;
