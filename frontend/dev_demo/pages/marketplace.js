import Link from "next/link";

function Marketplace() {
  // In a real-world scenario, this data would come from an API call
  const collections = [
    {
      id: "1",
      title: "Nonprofit A Collection: Dummy Apes NGO",
      nfts: [
        {
          id: "a1",
          title: "NFT 1",
          description: "Description for NFT 1",
          image: "/collections/A/images/A_1_NFT.png",
          price: "$100",
        },
        {
          id: "a2",
          title: "NFT 2",
          description: "Description for NFT 2",
          image: "/collections/A/images/A_2_NFT.avif",
          price: "$200",
        },
      ],
    },
    {
      id: "2",
      title: "Nonprofit B Collection: Dummy Apes NGO",
      nfts: [
        {
          id: "b1",
          title: "NFT B1",
          description: "Description for NFT B1",
          image: "/collections/A/images/A_3_NFT.avif",
          price: "$100",
        },
        {
          id: "b2",
          title: "NFT B2",
          description: "Description for NFT B2",
          image: "/collections/A/images/A_4_NFT.jpg",
          price: "$500",
        },
      ],
    },
    // ... more collections
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-5">Marketplace</h1>
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="bg-white p-6 rounded-xl shadow-lg mb-6"
        >
          <h2 className="text-3xl mb-4">{collection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collection.nfts.map((nft) => (
              <Link
                href={`/nft/${nft.id}`}
                key={nft.id}
                className="group border w-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div>
                  <img
                    className="w-full max-h-60 object-cover mb-4"
                    src={nft.image}
                    alt={nft.title}
                  />
                  <div className="p-4">
                    <h3 className="text-xl">{nft.title}</h3>
                    <p className="text-gray-600 mt-2 hidden group-hover:block">
                      {nft.description}
                    </p>
                    <span className="text-green-500 mt-2 hidden group-hover:block">
                      {nft.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;
