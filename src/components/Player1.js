import React, { Component } from 'react'

class Player1 extends Component {

    handleClick = () =>{
        this.props.handleGamePlay(this.props.index)
      }
      
    render(){
    return(
        <>
        <div onClick= {this.handleClick.player1}>
        {this.props.value}
        </div>
        </>
    )
}
}

export default Player1