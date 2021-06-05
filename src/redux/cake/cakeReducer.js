// this will accept STATE and ACTION

const initialState = {
    numbOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numbOfCakes: state.numbOfCakes > 0 ? state.numbOfCakes - 1 : 0
            }
        case "ADD_CAKE":
            return {
                ...state,
                numbOfCakes: state.numbOfCakes + 1
            }
        default: return state
    }
}


export default cakeReducer;
