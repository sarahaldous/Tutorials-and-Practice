import React from 'react'
import { createSTore, compose } from 'redux'
import { syncHistoryWithStore} from 'react-router-redux'
import { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index'

//default data - could come from an API, but in this case, it's from another file 
import comments from './data/comments'
import posts from './data/posts'

//create an object for the default data
const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store