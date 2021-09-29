import React, { Component } from 'react'

class Player2 extends Component {
    render(){
    return(
        <>
        <div onClick= {this.handleClick}>
        {this.props.value}
        </div>
        </>
    )
}
}

export default Player2