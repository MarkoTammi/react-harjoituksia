
import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  state = {counter : 0 }

  timesClicked = (event) => {
    this.setState({counter:this.state.counter+1})
  }
  render() {

    const now = new Date()
    
    return (
      <div>
        <Header title='Tänään on ' time={now.toString()} />
        
        <div>
          <p> {this.state.counter} </p>
          <button onClick={this.timesClicked}>Kasvata laskuria</button>
        </div>

        <Main text='Tämä on main App'/>
        <Footer text='Tämä on footer App'/>
      </div>
    )
  }
}

/* const App = () => {

  const now = new Date()

  return (
    <div>
      <Header title='Tänään on ' time={now.toString()} />
      <Main text='Tämä on main App'/>
      <Footer text='Tämä on footer App'/>
    </div>
  );
}
 */

export default App;
