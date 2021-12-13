import styled from 'styled-components';

import { LogOutBtn } from '../Navigation/navigation.style';

export const UserAuthWraP = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme.palette.constants.dimBackground};
`
export const UserAuthForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    min-width: 450px;
    background: ${props=> props.theme.palette.constants.white};
    border-radius: 30px;
    input + input {
        margin-top: 30px;
    }
    @media (max-width: 668px){
        width: 85%;
        min-width: auto;
    }
    @media (max-width: 412px){
        padding: 30px;
    }
`
export const UserAuthInput = styled.input`
    min-height: 50px;
    border-radius: 5px;
    border: none;
    padding: 15px;
    background: ${props=> props.theme.palette.constants.dimBackground};
`
export const UserAuthBtn = styled(LogOutBtn)`
    border-radius: 5px;
    margin-top: 30px;
    background: ${props=> props.theme.palette.constants.baseColor};
    color: ${props=> props.theme.palette.constants.white};
`