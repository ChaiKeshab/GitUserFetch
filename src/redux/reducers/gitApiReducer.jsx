const initialState = {
    data: {},  //null
    isLoading: false,
    error: null
}

const gitApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GIT_USER':
            return { ...state, isLoading: true, error: null }
        case 'FETCH_GIT_USER_SUCCESS':
            return { ...state, isLoading: false, data: action.payload }
        case 'FETCH_GIT_USER_ERROR':
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state;
    }
}

export default gitApiReducer