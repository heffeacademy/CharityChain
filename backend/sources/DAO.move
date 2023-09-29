module backend::DAO {


    struct DAO has key {
        id: UID, 
        proposer: CC_partner, 
        proposals: Option<Vector<Proposal>>, 
        voters: Option<Vector<UID>>, 
        vault: Vault 
    }

    struct Proposal has key {
        id: UID,
        collection_id: u64 
        voters:Option<Vector<UID>>, 
        time_start: u64, 
        time_end: u64, 
        decision: bool
    }

    struct Vote has store {
        accept: bool, 
    }

    public entry fun make_proposal() {
        _make_proposal(collection,)
    }

}