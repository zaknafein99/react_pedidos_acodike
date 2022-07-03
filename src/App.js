import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

      this.state = {
      customers: [],
      searchField: '350',
      url: `http://localhost:8080/api/v1/customers/${this.state.searchField}`
    };
  }

  componentDidMount(){
    fetch(this.state.url)
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  }

  render(){

    const filteredCustomers = this.state.customers.filter((customer) => {
      return customer.telefono.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
      
      <form onSubmit={this.onSearchChange}>
        <label>
          <input 
            className='search-box' 
            type='search' 
            placeholder='telefono' 
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <table>
              <tr>
                <th>Id</th>
                <th>Cliente</th>
                <th>Direccion</th>       
                <th>Teléfono</th>
              </tr>
        {filteredCustomers.map((customer) => {
          return (
            // <div key={customer.id}>
            //   <h1>{customer.apellidonombre} - {customer.telefono}</h1>
            // </div>
            
              <tr>
                <td>{customer.id}</td>
                <td>{customer.apellidonombre}</td>
                <td>{customer.direccion}</td>
                <td>{customer.telefono}</td>
              </tr>
          );

        })}
        </table>

        
      </div>
    );
  }
}
   

export default App;
