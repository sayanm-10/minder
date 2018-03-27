// Function is an Action Creator
// Returns an Action (an obj)
export const selectBook = (book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}