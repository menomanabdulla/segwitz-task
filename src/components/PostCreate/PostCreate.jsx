import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import uniqid from 'uniqid'

import { postData } from '../../service/API'
import { createPost  } from '../../state/postSlice'

import {
    PostCreateWraP,
    PostCreateForm,
    PostCreateInput,
    PostCreateTextarea,
    PostCreateBtn
} from './postCreate.style'

const PostCreate = () => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate ()

    const meta = [
        "Dec 12, 2021",
        "2 min read"
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !description){
            window.location.reload(true)
        }else{
            postData(
                'http://localhost:8000/posts',
                    {
                        title,
                        description,
                        meta,
                        id: uniqid()
                    }
                )
                .then(resp => {
                    dispatch(createPost(resp))
            })

            navigate('/postlist')
        }
    }

    return (
        <PostCreateWraP>
            <PostCreateForm onSubmit={e => handleSubmit(e)}>
                <PostCreateInput
                    type="text" 
                    placeholder="Post Title" 
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <PostCreateTextarea
                    type="text" 
                    placeholder="Post Desciption" 
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <PostCreateBtn>Create Post</PostCreateBtn>
            </PostCreateForm>
        </PostCreateWraP>
    )
}

export default PostCreate