import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
  render() {
    return(
      <div>
        <p>Name: "Daniel"</p>
        <p>Age: 22</p>
        <p>Email: "daniel.goh@alphacamp.tw"</p>
      </div>
    )
  }
}

class Family extends React.Component {
  render() {
    return(
      <Person />
    )
  }
}

class Dashboard extends React.Component {
  render() {
    return(
      <Family />
    )
  }
}

// ==========================================

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);
