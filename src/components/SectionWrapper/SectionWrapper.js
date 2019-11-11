import React from 'react'

function sectionWrapper(props) {
  
  const marginBottom = {
    marginBottom: '100px'
  }

  return (
    <section style={marginBottom}>{props.children}</section>
  )
}

export default sectionWrapper
