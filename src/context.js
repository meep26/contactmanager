import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case 'DELETE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
         };
      
      case 'ADD_CONTACT':
         return {
            ...state,
            contacts: [action.payload, ...state.contacts]
         };
      
      case 'UPDATE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.map(contact => {
               return contact = contact.id === action.payload.id ? action.payload : contact;
            })
         };

      default:
         return state;
   }
};

export class Provider extends Component {
   state = {
      contacts: [],
      dispatch: action => {
         this.setState(state => reducer(state, action))
      }
   };

   async componentDidMount() {
      try {
         const users = await axios.get('https://jsonplaceholder.typicode.com/users')
         this.setState({
            contacts: users.data
         })
      }
      catch (error) {
         console.log(error);
      }  
   }

   render() {
      return (
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      );
   }
}

export const Consumer = Context.Consumer;