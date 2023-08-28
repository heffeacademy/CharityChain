module backend::account {
    
    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use backend::DAO; 

    struct CC_admin has key, store {
        id: UID,
        cc_partners: Option<vector<CC_partner>>,
        proposals: Option<vector<Proposal>>, 
        num_partners: u64,
    }

    fun init (ctx: &mut TxContext){
        let admin = CC_admin{
            id: object::new(ctx), 
            num_partners: 0, 
        }
        transfer::transfer(admin, tx_context::sender(ctx));
    }

    struct CC_partner has key, store {
        name: String,
        description: String,
        dao: DAO,
        nft_collections: vector<NFT_collection>,
        proposals: vector<Proposal>
    }

    public entry fun create_cc_partner(
        _: &CC_admin, 
        name: vector<u8>,
        description: vector<u8>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let cc_partner = CC_partner {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            dao:: DAO::create_dao(&cc_partner)
        };
        CC_admin::cc_partners.push_back(cc_partner);
        transfer::transfer(cc_partner, sender);
    }
}