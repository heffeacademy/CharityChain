// pages/vote.js
import VoteButton from '../components/VoteButton';

function VotePage() {
    // Dummy data for now
    const proposals = [
        { id: 1, title: "Proposal 1", description: "Description for proposal 1" },
        // ... add more proposals
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

    // Styles for each proposal card
    const cardStyle = {
        background: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
        marginBottom: '1rem',
        width: '100%',
        maxWidth: '600px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Vote on Proposals</h1>
            {proposals.map(proposal => (
                <div key={proposal.id} style={cardStyle}>
                    <h3>{proposal.title}</h3>
                    <p>{proposal.description}</p>
                    <VoteButton proposalId={proposal.id} />
                </div>
            ))}
        </div>
    );
}

export default VotePage;
