export default (state,action)=>{
    switch(action.type){
        case "Delete_Transaction":
            return {
                ...state,
                transaction:state.transaction.filter(trans=>action.payload!==trans.id)
            }
        case "Add_Transaction":
            return {
                ...state,
                transaction:[action.payload,...state.transaction]
            }

default:
    return state;
    }

}