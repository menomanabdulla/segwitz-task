import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        posts: []
    },
    reducers:{
        getposts: (state, action) => {
            state.posts = action.payload
        },
        createPost: (state,action) => {
            state.posts.push(action.payload)
        }
    }
})


export const { getposts, createPost } = postsSlice.actions

export const selectPosts = (state) => state.posts.posts 

export default postsSlice.reducer