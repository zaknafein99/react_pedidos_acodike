import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/v1/items')
    .then((response) => response.json())
    .then((items) => this.setState(() => {
      return {items: items}
    },
    () => {
        console.log(this.state);
      }
    ));
  }

  render(){
    return (
      <div className="App">
        {this.state.items.map((item) => {
          return (
            <div key={item.codigo}>
              <h1>{item.codigo} - {item.nombre}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
   

export default App;
