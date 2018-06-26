import * as React from 'react';
// import { connect } from 'react-redux';
import AppBody from './components/app-body';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBody var1="Hello" />
      </div>
    );
  }
}

export default App;
