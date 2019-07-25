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
    
    this.setDirection = this.setDirection.bind(this);
    this.moveCircleA = this.moveCircleA.bind(this);
    this.startDial = this.startDial.bind(this);
    this.endDial = this.endDial.bind(this);    
  }
    
  render() {
    return (
      <div className="circleOuter">
      <Circle />
        <div className="circleInner">          
        </div>
      </div>
    );
  }
}

class Circle extends React.Component {
  render() {
    return (
      <button className="circleA" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

// ========================================

ReactDOM.render(
  <Telephone />,
  document.getElementById('root')
);