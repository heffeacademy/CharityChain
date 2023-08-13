// components/VoteButton.js

function VoteButton({ proposalId }) {
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

    // Event handler for button click
    const handleVote = () => {
        // In a real application, this would contain logic to cast the vote
        alert(`Voted for proposal ${proposalId}`);
    };

    return (
        <button style={buttonStyle} onClick={handleVote}>Vote</button>
    );
}

export default VoteButton;
