export const initialState = {
    user: null,
    times: [],
    games:[],
    gamenews:"Games",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.data,
            }
        case 'SET_GAMES':
            return {
                ...state,
                games: action.data,
            }
        case 'SET_TIMES':
            return {
                ...state,
                times: action.data,
            }
        default:
            return state;
    }
};

export default reducer;