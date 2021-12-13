import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getposts, selectPosts } from '../../state/postSlice'

import { getData } from '../../service/API'
import Navigation from '../Navigation/Navigation'
import UserIntro from '../UserIntro/UserIntro'

import { 
    PostListWrap,
    PostListContainer,
    Post,
    PostContent,
    PostThumb,
    PostMeta,
    PostTitle,
    PostLink,
    PostDescription,
    LoadingWrap
    } from './postList.style'

const PostList = () => {
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
   
    useEffect(() => {
        getData('http://localhost:8000/posts')
            .then(resp => {
                dispatch(getposts(resp))
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [dispatch])
    if(error){
        return(
            <LoadingWrap>
            <h2>{error.message}</h2>
            </LoadingWrap>
        )
    }
    if(isLoading){
        return(
            <LoadingWrap>
                <h2>Loading...</h2>
            </LoadingWrap>
        )
    }

    
    return(
        <>
            <Navigation/>
            <UserIntro/>
            <PostListWrap>
                <PostListContainer>
                    {posts &&
                        posts.map(post => {
                            const {id,title, description, meta} = post;
                            return(
                            <Post key={id}>
                                <PostLink href="/">
                                    <PostContent>
                                        <PostTitle>
                                            {title}
                                        </PostTitle>
                                        <PostMeta>
                                            {meta.map(item => (
                                                <span key={item}>{item}</span>
                                            ))}
                                        </PostMeta>
                                        <PostDescription>
                                            {description}
                                        </PostDescription>
                                    </PostContent>
                                    <PostThumb/>
                                </PostLink>
                            </Post>
                        )})
                    }   
                </PostListContainer>
            </PostListWrap>
        </>
    )
}

export default PostList