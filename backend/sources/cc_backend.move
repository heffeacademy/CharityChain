module backend::cc_backend{

    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use backend::DAO; 

    struct CC_admin has key, store {
        id: UID
        cc_partners: vector<CC_partner>
        proposals: vector<Proposal>
        vault: Vault
    }

    public entry fun create_cc_partner(
        _ &CC_admin, 
        name: vector<u8>,
        description: vector<u8>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let cc_partner = CC_partner {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
        };

        cc_admin::cc_partners.push_back(cc_partner);
        transfer::transfer(cc_partner, sender);
    }

    struct CC_partner has key, store {
        name: String,
        description: String,
        dao: DAO,
        nft_collections: vector<NFT_collection>
        proposals: vector<Proposal>
    }

    public entry fun create_cc_partner(
        name: vector<u8>,
        description: vector<u8>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let cc_partner = CC_partner {
            name: string::utf8(name),
            description: string::utf8(description),
        };

        cc_partner.dao = DAO::create_dao(cc_partner: cc_partner);
        cc_admin::cc_partners.push_back(cc_partner);
        transfer::transfer(cc_partner, sender);
    }

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