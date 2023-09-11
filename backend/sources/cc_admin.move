module backend::cc_admin {
    
    use sui::url::{Self, Url};
    use std::string::{Self, String};
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use backend::DAO; 
    use backend::cc_partner::{CC_partner}; 

    struct Admin has key {
        id: UID,
        cc_partners: Option<vector<&mut CC_partner>>,
        num_partners: u64,
    }

    fun init (ctx: &mut TxContext) {
        let AdminCap = Admin{
            id: object::new(ctx), 
            cc_partners: option::none(), 
            num_partners: 0, 
        }
        transfer::transfer(AdminCap, tx_context::sender(ctx))
    }


}