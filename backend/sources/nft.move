module backend::nft {

        use sui::url::{Self, Url};
        use std::string::{Self, String};
        use sui::object::{Self, UID};
        use sui::transfer;
        use sui::tx_context::{Self, TxContext};
        use backend::CC_admin; 
        use backend::CC_partner; 

        struct NFT_collection has key, store {
        name: String,
        description: String,
        cc_partner: CC_partner,
        nfts: vector<NFT>
    }

    public entry fun create_nft_collection(
        name: vector<u8>,
        description: vector<u8>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let nft_collection = NFT_collection {
            name: string::utf8(name),
            description: string::utf8(description),
        };

        nft_collection.cc_partner = CC_partner::get_from_sender(ctx);
        transfer::transfer(nft_collection, sender);
    }

    struct NFT has key, store {
        id: UID,
        metadata: String,
        nft_collection: NFT_collection,
        owner: AuthAccount
    }

    public entry fun mint_nft(
        nft_collection: NFT_collection,
        unique_identifier: U64,
        metadata: vector<u8>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let nft = NFT {
            id: object::new(ctx),
            metadata: string::utf8(metadata),
            nft_collection: nft_collection,
            owner: sender
        };

        nft_collection.nfts.push_back(nft);
        transfer::transfer(nft, sender);
    }
    }