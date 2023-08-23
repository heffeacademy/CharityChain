module backend::nft {
    use sui::url::{Self, Url}; 
    use std::string::{Self, String}; 
    use sui::object::{Self, UID}; 
    use sui::transfer;
    use sui::tx_context::{Self, TxContext}; 


    struct NFT has key, store {
        id: UID, 
        collection_id: u64, 
        name: String, 
        description: String, 
        url: Url
    }

    struct NFTAdminCap has key {id: UID}

    fun init(ctx: &mut TxContext) {
        transfer::transfer({NFTAdminCap{id: object::new(ctx)}}, tx_context::sender(ctx))
    }
    
    public entry fun mint_to_sender(
        name: vector<u8>, 
        description: vector<u8>, 
        url: vector<u8>, 
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx); 
        let nft = NFT {
            id: object::new(ctx), 
            name: string::utf8(name), 
            description: string::utf8(description), 
            url: url:new_unsafe_from_bytes(url)
    }; 

    transfer::transfer(nft, sender)
}