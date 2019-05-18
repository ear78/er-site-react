import React, { Component } from 'react'

class About extends Component {
    state = {
        message: 'This is About'
    }
    render() {
        return (
            <div>
                { this.state.message }
            </div>
        )
    }
}

export default About
