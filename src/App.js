import React, { Component } from 'react'
import Square from './components/Square'
import Player1 from './components/Player1'
import Player2 from './components/Player2'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      player1: null,
      player2: null,
    }
  }
  // componentDidMount(){
  //   // let player1 = "❌"
  //   // let player2 = "O"
  //   this.setState({player1: null, player2: null})
  // }
  jumpTo(step){
    this.setState({
        player1: step,
        player2: (step%2)===0
    })
}

  handleGamePlay = (index) => {
    const { squares, player1, player2 }= this.state
    if(player1 === squares.indexOf(0,8)){
      squares[index] = "❌"
      this.setState({squares: squares})
    } else if(player2 === index){
      squares[index] = "🅾️"
      this.setState({squares: squares})
    }
     this.setState({squares: squares})
  }
// Winning Combinations
  // winning = () => {
  //   const lines = [
  //     [0, 1, 2],
  //       [3, 4, 5],
  //       [6, 7, 8],
  //       [0, 3, 6],
  //       [1, 4, 7],
  //       [2, 5, 8],
  //       [0, 4, 8],
  //       [2, 4, 6]
  //   ];
  // }
  render(){
    console.log("player1", this.state.player1)
    console.log("player2", this.state.player2)
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
        <Player1 />
          <Player2 />
      </>
    )
  }
}
export default App
