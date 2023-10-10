const initialState = {
    data: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SEARCH_DATA':
            return { ...state, data: action.payload }

        default:
            return state
    }
}

export default searchReducer