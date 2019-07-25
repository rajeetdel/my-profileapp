import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Circle extends React.Component {
  render() {
    return (
      <button className="circleA" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

class Telephone extends React.Component {
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




// ========================================

ReactDOM.render(
  <Telephone />,
  document.getElementById('root')
);