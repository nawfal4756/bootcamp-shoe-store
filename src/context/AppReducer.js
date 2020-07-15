export default (state, action) => {
    switch(action.type) {
        case 'DELETE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}