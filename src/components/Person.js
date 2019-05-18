import React from 'react'

const person = (props) => {
    return (
        <div>
            <div>{ props.name }</div>
            <div>{ props.age }</div>
        </div>
    )
}

export default person
