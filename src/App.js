import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    // const name = 'Alan';
    // const showHello = false;
    // const showMath = true;
    // let math;
    // const num1 = 40;
    // const num2 = 38;
    // if (showMath) {
    //   math = (
    //     <h4>
    //       {num1} + {num2} = {num1 + num2}
    //     </h4>
    //   );
    // } else {
    //   math = null;
    // }
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
