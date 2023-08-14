// components/NFTCard.js

function NFTCard({ title, description, imageUrl }) {
    // Styles for the card container
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
    };

    // Styles for the NFT image
    const imageStyle = {
        width: '100%',
        maxHeight: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '1rem'
    };

    // Styles for the NFT title
    const titleStyle = {
        fontSize: '1.5rem',
        marginBottom: '0.5rem'
    };

    return (
        <div style={cardStyle}>
            <img src={imageUrl} alt={title} style={imageStyle} />
            <h3 style={titleStyle}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default NFTCard;
