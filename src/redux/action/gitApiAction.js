import axios from "axios"

export const gitApiHit = (userSearchData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_GIT_USER_LOADING' })
            const url = `https://api.github.com/users/${userSearchData}`
            // const url = `https://jsonplaceholder.typicode.com/todos/${userSearchData}`
            const response = await axios.get(url)

            dispatch({
                type: "FETCH_GIT_USER_SUCCESS",
                payload: response.data
            })
        }
        catch (error) {
            dispatch({
                type: "FETCH_GIT_USER_ERROR",
                payload: error.message
            })
        }
    }
}
