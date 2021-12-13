import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'

import { login } from '../../state/authSlice'

import { 
    UserAuthWraP,
    UserAuthForm,
    UserAuthInput,
    UserAuthBtn
 } from './userAuth.style'


const UserAuth = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate ()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password){
            window.location.reload(true)
        }
        localStorage.setItem('segIsLoggedin', true)
        dispatch(login({
            name,
            email,
            password,
            isLoggedIn: true
        }))
        navigate('/postlist')
    }

    return (
        <UserAuthWraP>
            <UserAuthForm onSubmit={e => handleSubmit(e)}>
                <UserAuthInput 
                    type="text" 
                    placeholder="Full Name" 
                    onChange={e => setName(e.target.value)}
                />
                <UserAuthInput 
                    type="email" 
                    placeholder="Username or email" 
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <UserAuthInput 
                    type="password" 
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)} 
                    required
                    />
                <UserAuthBtn>Submit</UserAuthBtn>
            </UserAuthForm>
        </UserAuthWraP>
    )
}

export default UserAuth