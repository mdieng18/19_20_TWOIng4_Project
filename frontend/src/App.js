import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Route from './Route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
           <h3 class ="hoverable">
              <a href="/">
                Home
              </a> 
            <span className="hidden-xs text-muted admin"><a href='/admin'> Admin</a>  </span>
          </h3>
       </header>
       <main>
         <Route/>
       </main>
      </div>
    );
  }
}
export default App;

