// Actions are how we communicate with the Redux store. For this blog app, we're going to want to fetch posts from an API and put them in our Redux state.
// Since fetching posts is an asynchronous action, it will require the use of Redux thunk. 
// Fortunately, we don't have to do anything special to use thunk beyond setting it up in the store, which we already did.
// We'll define the action types as constants. This is not necessary, but is a common convention, and makes it easy to export the actions around and prevent typos.

// We want to do three things:
//     getPosts - begin telling Redux we're going to fetch posts from an API
//     getPostsSuccess - pass the posts to Redux on successful API call
//     getPostsFailure - inform Redux that an error was encountered during Redux on failed API call

// Create Redux actions types
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

// Create action creators, functions that return an action, which consists of the type and an optional payload containing data.
export const getPosts = () => ({
    type: GET_POSTS,
})

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
})

// Make the asynchronous thunk action that combines all three of the above actions. 
// When called, it will dispatch the initial getPosts() action to inform Redux to prepare for an API call, then in a try/catch, do everything necessary to get the data, and dispatch a success or failure action as necessary.
// Combine them all in an asynchronous thunk
export function fetchPosts() {
    return async (dispatch) => {
        dispatch(getPosts())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            dispatch(getPostsSuccess(data))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}