import { Pinata } from "@pinata/sdk";

const pinata = new Pinata({
  apiKey: '7eb90c5ff4ff938a3ec6',
  secretKey: 'f5b13436b998f3555b55f80146b7033a1410fc05e373f1f179fa645f452b5346',
});

export async function uploadFile(file) {
  const pinataHash = await pinata.pinFile(file);
  return pinataHash;
}