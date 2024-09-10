import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import commentsReducer from './commentsReducer'

// A reducer is a function that determines changes to Redux state. It is a pure function that returns a copy of the state with the new change.
// A neat feature of Redux is that we can have many reducers, and combine them all into one root reducer that the store uses, using combineReducers. 
// This leads to us being able to easily organize our code while still having everything in one root state tree.

// Since this app will be like a blog, it will have a list of posts, and we'll put that in the postsReducer in a moment. 
// Having this combineReducers method allows us to bring whatever we want in - a commentsReducer, an authReducer, and so on.

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
});

export default rootReducer
