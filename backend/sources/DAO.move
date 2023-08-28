module backend::DAO {


    struct DAO has key {
        id: UID, 
        managing: CC_partner, 
    }
}