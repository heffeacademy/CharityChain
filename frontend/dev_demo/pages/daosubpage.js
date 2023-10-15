import Link from "next/link";

function DAOSubpage() {
  // Static hardcoded data
  const nonprofit = {
    id: "1",
    name: "Nonprofit A",
    icon: "/collections/A/images/A_1_NFT.png",
    daoDetails: {
      title: "Nonprofit A DAO",
      description:
        "This is a decentralized autonomous organization for Nonprofit A.",
      proposals: [
        {
          id: "1",
          title: "Proposal 1",
          image: "/path/to/proposalImage1.jpg",
          description: "Description for Proposal 1",
          // ... other proposal details
        },
        // ... other proposals
      ],
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen p-5 text-white">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">{nonprofit.daoDetails.title}</h1>
        <p className="text-lg mb-4">{nonprofit.daoDetails.description}</p>
      </header>

      <div className="grid grid-cols-3 gap-6">
        {/* Left: List of Voters & Actions */}
        <div className="col-span-1 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Voters</h2>
          {/* Sample voters list. Replace this with dynamic data when you have it. */}
          <ul className="mb-6">
            <li className="mb-2">Voter1</li>
            <li className="mb-2">Voter2</li>
            {/* ... more voters */}
          </ul>

          <div className="mt-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-4">
              Yes
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              No
            </button>
          </div>
        </div>

        {/* Center: Proposals */}
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Proposals</h2>
          <ul>
            {nonprofit.daoDetails.proposals.map((proposal) => (
              <li key={proposal.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <img
                  src={proposal.image}
                  alt="Proposal Image"
                  className="w-32 h-32 object-cover mb-4"
                />
                <h3 className="text-xl mb-2">{proposal.title}</h3>
                <p>{proposal.description}</p>
                {/* ... other proposal details ... */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DAOSubpage;
