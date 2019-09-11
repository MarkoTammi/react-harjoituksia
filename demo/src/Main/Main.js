
import React, {Component} from 'react';
import './Main.css'
import Box from '../Box/Box';



class Main extends Component {

    state = {
        persons: [
            {name: 'Liisa', title: 'Designer', age: 25},
            {name: 'Kati', title:'CEO', age: 26},
            {name: 'Heli', title:'Developer', age: 29}
        ]
    }

    handleOnClick = () => {
        console.log('clicked')
        this.setState({
            persons: [
                {name: 'Liisa2', title: 'Designer', age: 225},
                {name: 'Kati2', title:'CEO', age: 226},
                {name: 'Heli2', title:'Developer', age: 229}
            ]
        })
    }

    render() {
    return (
        <div>
            <div className='mainStyle'>
                <button onClick={this.handleOnClick}>Click me and check console</button>
            </div>
            
            <div className='container'>
                <div className='row'>
                    <Box  name={this.state.persons[0].name} title={this.state.persons[0].title} age={this.state.persons[0].age} />   
                    <Box  name={this.state.persons[1].name} title={this.state.persons[1].title} age={this.state.persons[1].age} />
                    <Box  name={this.state.persons[2].name} title={this.state.persons[2].title} age={this.state.persons[2].age} />
                </div>
            </div>
        </div>
    )}
}


export default Main;