module backend::cc_partner {

    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::object::{Self, UID};
    use sui::transfer;
    use backend::cc_admin::{Admin}; 
    use sui::tx_context::{Self, TxContext};

    struct partner has key, store {
        id: UID, 
        name: String,
        description: String,
        dao: Option<DAO>,
        nft_collections: Option<vector<NFT_collection>>,
        num_collections: u64, 
    }

    
    struct NFT_collection has key, store {
        id: UID, 
        name: String,
        description: String,
        cc_partner: CC_partner,
        nfts: vector<NFT>
    }

    public entry fun create_cc_partner(
        _: &Admin, 
        name: vector<u8>,
        description: vector<u8>,
        ctx: &mut TxContext, 
    ) {
        let sender = tx_context::sender(ctx);
        let cc_partner = partner {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            dao: option::none(), 
            nft_collections: option::none(),
        };
        cc_partner.dao = DAO::create_dao(&cc_partner)
        CC_admin::cc_partners.push_back(cc_partner);
        let admin_acct = CC_admin::Admin; 
        admin_acct.num_partners = admin_acct.num_partners + 1; 
        transfer::transfer(cc_partner, sender);
    }

    public entry fun make_collection(_: &partner, ctx: &mut TxContext) {
        assert!(tx_context::sender(ctx) == &partner) 

    }

}