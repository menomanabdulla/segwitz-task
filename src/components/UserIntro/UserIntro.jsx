import React from 'react'
import {Link} from 'react-router-dom'
import UserThumb from '../UserThumb/UserThumb'
import {
    UserIntroWrap,
    UserIntroContainer,
    UserIntroContent
} from './userIntro.style'

const UserIntro = () => (
    <UserIntroWrap>
        <UserIntroContainer>
            <UserIntroContent>
                <h2>Tom Hanks</h2>
                <p>
                    User Name is a developer, speaker, and teacher 
                    with a passion for Web Development. 
                    He is a Senior Developer Advocate 
                    at Auth0 and has over 7 years of 
                    experience in Advocacy and Software 
                    Development. In his spare time, he runs a 
                    YouTube channel, plays co-ed soccer with 
                    his wife, spends time with his dogs, 
                    and can solve a Rubik&aposs cube in under a minute.
                </p>
            </UserIntroContent>
            <UserThumb
                height='100px'
                width='100px'
                fontSize='35px'
                text='NA'
            />
        </UserIntroContainer>
        <Link className="post__create__btn" to="/postcreate">Create Post</Link>
    </UserIntroWrap>
)

export default UserIntro