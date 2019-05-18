import React from 'react'

const backgroundImg = (props) => {
    let backgroundStyle = {
        backgroundImage: 'url(' + props.image + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 400
    }

    return (
        <div style={backgroundStyle}>
            <h1>{props.title}</h1>
            <h5>{props.subTitle}</h5>
        </div>
    )
}

export default backgroundImg
