import styled from 'styled-components'

export const UserIntroWrap = styled.div`
    border-bottom: 1px solid rgb(229, 231, 235);
    margin-bottom: 2.5rem;
    padding-bottom: 3rem;
    background: ${props=> props.theme.palette.constants.limeBackground};
    display: flex;
    flex-direction: column;
    .post__create__btn{
        margin: 0 auto;
        cursor: pointer;
        border: none;
        padding: 15px;
        min-width: 225px;
        border-radius: 12px;
        font-weight: 600;
        font-size: 18px;
        display: inline-flex;
        justify-content: center;
        color: ${props=> props.theme.palette.constants.white};
        background: ${props=> props.theme.palette.constants.baseColor};
    }
`

export const UserIntroContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 2rem 2rem 2rem;
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
    @media (max-width: 665px){
        flex-direction: column-reverse;
        text-align: center;
    }
`

export const UserIntroContent = styled.div`
    flex: 2;
    margin-right: 30px;
    h2{
        margin-bottom: 20px;
    }
    @media (max-width: 912px){
        h2{
            font-size: 40px;
            line-height: 50px;
        }
    }
    @media (max-width: 665px){
        margin-top: 30px;
        margin-right: 0px;
        h2{
            font-size: 35px;
            line-height: 45px;
        }
    }
`