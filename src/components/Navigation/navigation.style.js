
import styled from 'styled-components';


export const NavWrap = styled.header`
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    background: ${props=> props.theme.palette.constants.background};
`

export const NavContainer = styled.div`
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 640px){
        max-width: 640px;
    }
    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 1024px){
        max-width: 1024px;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1536px){
        max-width: 1536px;
    }
`

export const Logo = styled.a`
    display: flex;
    align-items: center;
    flex-grow: 1;
    h3{
        font-weight: 600;
        font-size: 35px;
        margin: 0 15px;
    }
    @media (max-width: 912px){
        h3{
            font-size: 29px;
        }
    }
    @media (max-width: 568px){
        h3{
            display: none;
        }
    }
    
`

export const Link = styled.a`
    text-decoration: none;
    color: ${props=> props.theme.palette.common.text};
`

export const RightNav = styled.div`
    display: flex;
    align-items: center;
`

export const LogOutBtn = styled.button`
    cursor: pointer;
    border: none;
    padding: 15px;
    min-width: 125px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    color: ${props=> props.theme.palette.constants.baseColor};
    background: ${props=> props.theme.palette.constants.white};
`


