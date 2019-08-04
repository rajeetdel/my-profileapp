import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Telephone extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
      classes: "circleAA"
    };
    
    this.startDialA = this.startDialA.bind(this); 
  }
  

  startDialA() {
    this.setState({classes: "circleA"});
  }
    
  render() {

    return (
      <div className="circleOuter">  
      <button onClick= {this.startDialA} className={this.state.classes}><p>A</p></button>
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