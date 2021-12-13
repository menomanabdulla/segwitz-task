import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logout } from '../../state/authSlice' 
import UserThumb from '../UserThumb/UserThumb'
import {
    NavWrap,
    NavContainer,
    Logo,
    RightNav,
    LogOutBtn
} from './navigation.style'



const Navigation = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
        localStorage.clear()
    }
    return(
        <NavWrap>
            <NavContainer className="container">
                <Logo href="/postlist" className="logo">
                    <UserThumb
                        height='80px'
                        width='80px'
                        fontSize='30px'
                        text='NA'
                    />
                    <h3>Tom Hanks&apos;s blog</h3>
                </Logo>
                <RightNav>
                    <LogOutBtn onClick={()=> handleLogout()}>
                        Logout
                    </LogOutBtn>
                </RightNav>
            </NavContainer>
        </NavWrap>
    )
}
export default Navigation;


