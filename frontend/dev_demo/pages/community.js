import Link from "next/link";

function Community() {
  const nonprofits = [
    {
      id: "1",
      name: "Nonprofit A",
      icon: "collections/A/images/A_1_NFT.png",
    },
    // ... more nonprofits
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-5">Community</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nonprofits.map((np) => (
          <div key={np.id} className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src={np.icon}
              alt={np.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl mb-4 text-center">{np.name}</h2>

            <div className="flex justify-center space-x-4">
              <Link
                href={`/marketplace/${np.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Join
              </Link>
              <Link
                // href={`/dao/${np.id}`}
                href={"daosubpage"}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                DAO
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
