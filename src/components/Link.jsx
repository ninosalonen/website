import React from 'react'

const Link = ({href, text}) => {
  return (
    <a href={href} target={'_blank'} rel="noreferrer">
        {text}
    </a>
  )
}

export default Link