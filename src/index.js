import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Telephone extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
      arr_circleA: [],
      // 0 = not started, 1 = in progress, 2= finished
      status: 0,
      // using keycodes to indicate direction
      direction: 39
    };
    
    this.moveCircleA = this.moveCircleA.bind(this);
    this.startDial = this.startDial.bind(this); 
  }
  
    // move circle A
  moveCircleA() {
    this.setState({ arr_circleA: [0, 0] });
  }
  
  startDial() {
    this.moveCircleA();
    this.setState({
      status: 1,
      arr_circleA: [1, 1]
    });
  }
    
  render() {
    return (
      <div className="circleOuter">
        <button className="circleA" onClick={this.startDial}>
        <p>A</p>
        </button>  
        <div className="circleInner"></div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Telephone />,
  document.getElementById('root')
);