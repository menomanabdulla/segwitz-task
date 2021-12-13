import styled from 'styled-components'

export const PostListWrap = styled.div`
    background: ${props=> props.theme.palette.common.background};
`

export const PostListContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (min-width: 768px){
        width: 85%;
    }
    @media (min-width: 1024px){
        width: 66.666667%;
    }
    @media (min-width: 1440px){
        min-width: 850px;
        max-width: 1000px;
    }
`

export const Post = styled.article`
    margin-bottom: 4rem;
    padding: 0 1rem;
    @media (min-width: 1024px) {
        padding-left: 0 4rem;
    }
    @media (max-width: 912px){
        margin-bottom: 2rem;
    }
`

export const PostContent = styled.div`
    margin-right: 50px;
    @media (max-width: 912px){
        h2{
            font-size: 26px;
            line-height: 30px; 
        }
    }
    @media (max-width: 912px){
        margin-right: 0px;
    }
`

export const PostThumb = styled.div`
   min-height: 250px;
   min-width: 250px;
   background: ${props=> props.theme.palette.constants.background};
   @media (max-width: 912px){
        width: 100%;
        margin: 0 0 30px 0;
    }
`

export const PostMeta= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span{
        display: flex;
        align-items: center;
        color: ${props=> props.theme.palette.common.text};
    }
    span + span {
        margin-left: 15px;
    }
    svg{
        margin-right: 8px;
    }
`

export const PostTitle= styled.h2`
    font-size: 35px;
    line-height: 45px;
    margin-bottom: 20px;
    color: ${props=> props.theme.palette.common.text};
`
export const PostDescription= styled.p`
    color: ${props=> props.theme.palette.common.text};
`
export const PostLink= styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 912px){
        flex-direction: column-reverse;
    }
`

export const LoadingWrap = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
       margin: 0 auto;
    }
`