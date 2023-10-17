import Link from "next/link";
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from "@suiet/wallet-kit";
function Marketplace() {
  // In a real-world scenario, this data would come from an API call
  const collections = [
    {
      id: "1",
      title: "American Bird Conservancy: Save the birds!",
      nfts: [
        {
          id: "a1",
          title: "Birb1",
          description: "Description for Birb 1",
          image: "/collections/American_Bird_Conservancy/pigeon1.avif",
          price: "$100",
        },
        {
          id: "a2",
          title: "Birb2",
          description: "Description for Birb 2",
          image: "/collections/American_Bird_Conservancy/pigeon2.avif",
          price: "$200",
        },
        {
          id: "a3",
          title: "Birb3",
          description: "Description for Birb 3",
          image: "/collections/American_Bird_Conservancy/pigeon3.avif",
          price: "$300",
        },
        {
          id: "a4",
          title: "Birb4",
          description: "Description for Birb 4",
          image: "/collections/American_Bird_Conservancy/pigeon4.avif",
          price: "$400",
        },
      ],
    },
    {
      id: "2",
      title: "Flowers For The Future: Giving Women a Chance in Afghanistan ",
      nfts: [
        {
          id: "b1",
          title: "NFT 1",
          description: "Description for NFT 1",
          image: "/collections/Flowers_For_The_Future/1.jpg",
          price: "$100",
        },
        {
          id: "b2",
          title: "NFT B2",
          description: "Description for NFT B2",
          image: "/collections/Flowers_For_The_Future/2.jpg",
          price: "$500",
        },
        {
          id: "b3",
          title: "NFT B3",
          description: "Description for NFT B3",
          image: "/collections/Flowers_For_The_Future/3.jpg",
          price: "$1000",
        },
        {
          id: "b4",
          title: "NFT B4",
          description: "Description for NFT B4",
          image: "/collections/Flowers_For_The_Future/4.png",
          price: "$600",
        },
        {
          id: "b5",
          title: "NFT B5",
          description: "Description for NFT B5",
          image: "/collections/Flowers_For_The_Future/5.jpg",
          price: "$2300",
        },
        {
          id: "b6",
          title: "NFT B6",
          description: "Description for NFT B6",
          image: "/collections/Flowers_For_The_Future/6.jpg",
          price: "$2300",
        },
      ],
    },
    {
      id: "3",
      title: "Helenwood Dog Shelter: Help us help mans best friend!",
      nfts: [
        {
          id: "c1",
          title: "NFT C1",
          description: "Description for NFT C1",
          image: "/collections/Helenwood_Dog_Shelter/dog1.avif",
          price: "$550",
        },
        {
          id: "c2",
          title: "NFT C2",
          description: "Description for NFT C2",
          image: "/collections/Helenwood_Dog_Shelter/dog2.avif",
          price: "$740",
        },
        {
          id: "c3",
          title: "NFT C3",
          description: "Description for NFT C3",
          image: "/collections/Helenwood_Dog_Shelter/dog3.avif",
          price: "$50",
        },
        {
          id: "c4",
          title: "NFT C4",
          description: "Description for NFT C4",
          image: "/collections/Helenwood_Dog_Shelter/dog4.avif",
          price: "$185",
        },
      ],
    },
    {
      id: "4",
      title: "Vervet Mokney Foundation: Keeping Monkeys Happy",
      nfts: [
        {
          id: "d1",
          title: "NFT D1",
          description: "Description for NFT D1",
          image: "/collections/Vervet_Monkey_Foundation/monkey1.avif",
          price: "$69",
        },
        {
          id: "d2",
          title: "NFT D2",
          description: "Description for NFT D2",
          image: "/collections/Vervet_Monkey_Foundation/monkey2.avif",
          price: "$45",
        },
        {
          id: "d3",
          title: "NFT D3",
          description: "Description for NFT D3",
          image: "/collections/Vervet_Monkey_Foundation/monkey3.avif",
          price: "$1100",
        },
        {
          id: "d4",
          title: "NFT D4",
          description: "Description for NFT D4",
          image: "/collections/Vervet_Monkey_Foundation/monkey4.avif",
          price: "$420",
        },
      ],
    },
    // ... more collections
  ];

  const connectStyle = {
    position: "absolute",
    top: "10px",
    right: "200px",
    width: "100px",
    textAlign: "right",
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-5">Marketplace</h1>
      <div style={connectStyle}>
        <ConnectButton>Connect!</ConnectButton>
      </div>
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="bg-white p-6 rounded-xl shadow-lg mb-6 relative"
        >
          <h2 className="text-3xl mb-4">{collection.title}</h2>

          <button className="absolute top-1/2 left-2 z-10">←</button>
          <button className="absolute top-1/2 right-2 z-10">→</button>

          <div className="overflow-x-auto">
            <div className="flex flex-row gap-2">
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
        </div>
      ))}
    </div>
  );
}

export default Marketplace;
