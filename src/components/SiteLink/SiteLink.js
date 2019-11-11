import React from 'react'

function siteLink(props) {
  return (
    <a
      style={{fontWeight: props.bold ? '900' : ''}}
      href={props.to}
      target={props.target ? '_blank' : ''}>{props.children}</a>
  )
}

export default siteLink
