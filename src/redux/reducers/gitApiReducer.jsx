const initialState = {
    data: {},  //null
    isLoading: false,
    error: null
}

const gitApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GIT_USER_LOADING':
            return { ...state, isLoading: true, data: {}, error: null }
        case 'FETCH_GIT_USER_SUCCESS':
            return { ...state, isLoading: false, data: action.payload, error: null }
        case 'FETCH_GIT_USER_ERROR':
            return { ...state, isLoading: false, error: action.payload, data: {} }
        default:
            return state;
    }
}

export default gitApiReducer