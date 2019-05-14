import React, { Component } from 'react';
import RecipeContainer from './containers/Recipe'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ margin: 50 }}>
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
