import { configureStore } from '@reduxjs/toolkit'

import userAuthReducer from './authSlice'
import postsReducer from './postSlice'


export default configureStore({
    reducer:{
        user: userAuthReducer,
        posts: postsReducer
    }
})