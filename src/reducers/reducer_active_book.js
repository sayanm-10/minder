export default function(state = {}, action) { // State is not application state but reducer's state
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default: 
            return state;
    }
}