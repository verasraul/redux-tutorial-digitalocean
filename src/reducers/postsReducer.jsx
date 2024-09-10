import * as actions from '../actions/postsActions'

// Make the postsReducer. We can set it up with an initial state. 
// Just like you might expect from a regular React component, we'll have a loading and hasErrors state, as well as a posts array, where all the posts will live. 
// First we'll set it up with no actions in the switch, just a default case that returns the entire state.
// Set initial state:
export const initialState = { 
    posts: [],
    loading: false,
    hasErrors: false,
}

// For each action, we'll make a case, that returns the entire state plus whatever change we're making to it. 
// For GET_POSTS, for example, all we want to do is tell the app to set loading to true since we'll be making an API call.
    // GET_POSTS - begin loading
    // GET_POSTS_SUCCESS - the app has posts, no errors, and should stop loading
    // GET_POSTS_FAILURE - the app has errors and should stop loading
export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POSTS:
            return { ...state, loading: true }
        case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}