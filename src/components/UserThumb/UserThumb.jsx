import React from 'react'
import PropTypes from 'prop-types'

import  UserThumbWrap  from './userThumb.style'

const UserThumb = ({ height, width, fontSize, text }) => (
    <UserThumbWrap
        height={height}
        width={width}
        fontSize={fontSize}
    >
        {text}
    </UserThumbWrap>
)

export default UserThumb

UserThumb.propTypes ={
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.string,
    text: PropTypes.string
}

UserThumb.defaultProps = {
    height: '50px',
    width: '50px',
    fontSize: '25px',
    text: 'NA'
 };