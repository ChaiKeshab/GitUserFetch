import axios from "axios"

export const gitApiHit = (userSearchData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "FETCH_GIT_USER"
            })
            const url = `https://api.github.com/users/${userSearchData}`
            const response = await axios.get(url)

            dispatch({
                type: "FETCH_GIT_USER_SUCCESS",
                payload: response.data
            })
            return true;
        }
        catch (error) {
            dispatch({
                type: "FETCH_GIT_USER_ERROR",
                payload: error.message
            })
            throw false
        }
    }
}
