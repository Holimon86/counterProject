import React, { Component } from 'react'
import Plus from './components/Plus'
import Minus from './components/Minus'
import InputNum from './components/InputNum'
import Reset from './components/Reset' 

class App extends Component {
    state = {
      count: 0
    };

    countUp = () => {
      this.setState(
        {count: this.state.count +1}
      )
    }

    countDown = () => {
      this.setState(
        {count: this.state.count - 1}
      )
    }

    inputNum = (number) => {
      let value = parseInt(number)
      this.setState(
        {count: this.state.count+ value}
      )
    }

    reset = () => {
      this.setState({
        count:0
      })
    } 

    render() {
      return(
  <div className='App'>
      <div className='container'>
        <p>Days Until...</p>
        <h4>{this.state.count}</h4>
      </div>
      <div className="container-two">
          <Plus countUp={this.countUp} />
          <Minus countDown={this.countDown} />
        </div>
        <div className='container-three'>
            <InputNum inputNum={this.inputNum} />
            <Reset reset={this.reset} />
          </div>
        </div>
      )
    }
    }

    export default App

//    // Change code below this line
//    this.increment = this.increment.bind(this);
//    this.decrement = this.decrement.bind(this);
//    this.reset = this.reset.bind(this);
//    // Change code above this line
//  }
//  // Change code below this line
//  reset(){
//    this.setState({
//      count:0
//    });
//  }
//  increment(){
//    this.setState(state => ({
//      count: state.count + 1
//    }));
//  }
//  decrement(){
//    this.setState(state => ({
//      count: state.count - 1
//    }));
//  }
//  // Change code above this line
//  render() {
//    return (
//      <div>
//        <button className='inc' onClick={this.increment}>Increment!</button>
//        <button className='dec' onClick={this.decrement}>Decrement!</button>
//        <button className='reset' onClick={this.reset}>Reset</button>
//        <h1>Current Count: {this.state.count}</h1>
//      </div>
//    );
//  }
//};