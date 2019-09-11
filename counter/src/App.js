import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

  state = {
    counter: 0
  
  }

  handleAddCounter = () => {
    console.log('clicked +1')
    this.setState({counter:this.state.counter+1})
  }

  handleDecreaseCounter = () => {
    console.log('clicked -1')
    if (this.state.counter > 0){
    this.setState({counter:this.state.counter-1})
    }
  }

  handleResetCounter = () => {
    console.log('clicked 0')
    this.setState({counter:0})
  }

    render(){

      const styleButton = {
        margin: '2%', 
        borderRadius: '5%'
      }

      const styleCircleBeige = {
        height:'100px', 
        width:'100px', 
        padding:'40px',
        marginLeft: '40%',
        backgroundColor:'beige'
      }

      const styleCircleRed = {
        height:'100px', 
        width:'100px', 
        padding:'40px',
        marginLeft: '40%',
        backgroundColor:'red'
      }

      return (

      <div className="border m-5 pb-4">
        <h5 style={{margin:'40px 0 15px 42%'}}>Counter</h5>
        
        <h5 style={this.state.counter % 2 == 0 ? styleCircleRed : styleCircleBeige} 
          className="d-inline-block border rounded rounded-circle text-center text-align-middle">{this.state.counter}</h5>
        
        <div style={{'marginLeft': '10%', 'borderRadius': '5%', marginRight: '10%'}} className="row">
          <button style={styleButton} className="col" onClick={this.handleAddCounter}>+ 1</button>
          <button style={styleButton} className="col" onClick={this.handleDecreaseCounter}>- 1</button>
          <button style={styleButton} className="col" onClick={this.handleResetCounter}>Nollaa laskuria</button>

        </div>

      </div>
    )
  }
}

export default App;