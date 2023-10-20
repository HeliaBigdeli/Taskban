export const boardDetailsReducer = (state, action) => {
    switch ( action.type) {
        case "boardNameEdit" :
            return {...state, boardNameEdit : !state.boardNameEdit}
        default:
            return state;
    }
}
