import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      xmark: null,
      omark: null
    }
  }
  componentDidMount(){
    let X = "X"
    let O = "O"
    this.setState({xmark: X, omark: O})
  }
  handleGamePlay = (index) => {
    const { squares, xmark, omark }= this.state

  }

  render(){
    console.log("handleGamePlay", this.state.handleGamePlay)
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index)=>{
          return( <Square 
          value={value}
          index={index}
          key={index}
          handleGamePlay={this.handleGamePlay}
          />
          ) 
          })}
        </div>
        
      </>
    )
  }
}
export default App
