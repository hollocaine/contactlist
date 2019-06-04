import React, { Component } from 'react';
import uuid from 'uuid';
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: 'John Doe',
        email: 'sdfds.gmail.com',
        phone: '54545445'
      },
      {
        id: uuid(),
        name: 'Karen Black',
        email: 'black.gmail.com',
        phone: '5644654'
      },
      {
        id: uuid(),
        name: 'Henry Burton',
        email: 'heny.gmail.com',
        phone: '45646565'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
