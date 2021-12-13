import styled from 'styled-components';

import { LogOutBtn } from '../Navigation/navigation.style';

export const PostCreateWraP = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme.palette.constants.dimBackground};
`

export const PostCreateForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    min-width: 550px;
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
export const PostCreateInput = styled.input`
    min-height: 50px;
    border-radius: 5px;
    border: none;
    padding: 15px;
    margin-bottom: 30px;
    background: ${props=> props.theme.palette.constants.dimBackground};
`
export const PostCreateTextarea = styled.textarea`
    min-height: 150px;
    border-radius: 5px;
    border: none;
    padding: 15px;
    background: ${props=> props.theme.palette.constants.dimBackground};
    &:resize{
        display: none;
    }
`

export const PostCreateBtn = styled(LogOutBtn)`
    border-radius: 5px;
    margin-top: 30px;
    background: ${props=> props.theme.palette.constants.baseColor};
    color: ${props=> props.theme.palette.constants.white};
`