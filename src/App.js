import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      customers: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/v1/customers')
    .then((response) => response.json())
    .then((customers) => 
        this.setState(
          () => {
            return {customers: customers};
          },
          () => {
            console.log(this.state);
          }
    ));
  }

  render(){

    const filteredCustomers = this.state.customers.filter((customer) => {
      return customer.telefono.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
      <input 
        className='search-box' 
        type='search' 
        placeholder='telefono' 
        onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return {searchField};
          });

        }}  
      />
        {filteredCustomers.map((customer) => {
          return (
            <div key={customer.id}>
              <h1>{customer.apellidonombre} - {customer.telefono}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
   

export default App;
