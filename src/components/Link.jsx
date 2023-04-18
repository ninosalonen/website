import React from 'react'

const Link = ({href, text, aria}) => {
  return (
    <a href={href} target={'_blank'} rel="noreferrer" aria-label={aria}>
        {text}
    </a>
  )
}

export default Link