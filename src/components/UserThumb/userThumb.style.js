import styled from 'styled-components'

const UserThumbWrap = styled.div`
    height:${props=> props.height};
    width: ${props=> props.width};
    font-size: ${props=> props.fontSize};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${props=> props.theme.palette.constants.baseColor};
    background: ${props=> props.theme.palette.constants.white};
    
`

export default UserThumbWrap