import React, { Component } from 'react'

class Portfolio extends Component {
    state = {
        message: 'This is Portfolio'
    }
    render() {
        return (
            <div>
                { this.state.message }
            </div>
        )
    }
}

export default Portfolio
