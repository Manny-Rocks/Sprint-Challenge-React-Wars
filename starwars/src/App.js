import React, {Component} from 'react';
import StarWarsList from './components/StarWarsList.js'

import './App.css';

const btnStyle = {
  margin: '20px',
  bacgkround: 'white',
  borderRadius: '12px',
  height: '50px',
  width: '100px',
  background: 'blue',
  color: '#ffd700 '
}



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  class App extends Component {
    constructor() {
      super();
      this.state = {
        starwarsChars: [],
        next: null,
        prev: null,
      };
    }
  
    componentDidMount() {
      this.getCharacters('https://swapi.co/api/people/');
    }
    getCharacters = URL => {
      fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ 

          starwarsChars: data.results,
          next: data.next,
          previous: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  loadNext = () => {
    this.getCharacters(this.state.next);
  }

  loadPrev = () => {
    this.getCharacters(this.state.previous);
  }
    render(){
return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
          {this.state.previous === null ? null : (<button style={btnStyle} onClick={this.loadPrev}>Previous</button>)}
          {this.state.next === null ? null : (<button style={btnStyle} onClick={this.loadNext}>Next</button>)}

        </div>
          <div className='character-list'>
            <StarWarsList starwarsChars={this.state.starwarsChars} />
          </div>
    </div>
  );
} }


  
export default App;
