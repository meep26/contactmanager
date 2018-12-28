import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import uuid from 'uuid';

class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: ''
   };   

   onSubmit = (dispatch, e) => {
      e.preventDefault();
      
      const { name, email, phone } = this.state;

      const newContact = {
         id: uuid(),
         name,
         email,
         phone,
      };

      dispatch({ type: 'ADD_CONTACT', payload: newContact });

      // Clear fields
      this.setState({
         name: '',
         email: '',
         phone: ''
      });
   };

   onContactChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   render() {
      const { name, email, phone } = this.state;

      return (
         <Consumer>
            {value => {
               const { dispatch } = value;
               return (
                  <div className="card mb-3">
                     <div className="card-header">
                        <h3 className="card-title">Add Contact</h3>
                     </div>
                     <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                           <TextInputGroup 
                              label="Name"
                              name="name"
                              value={name}
                              placeholder="Enter name..."
                              onChange={this.onContactChange}
                           />
                           <TextInputGroup 
                              label="Email"
                              type="email"
                              name="email"
                              value={email}
                              placeholder="Enter email..."
                              onChange={this.onContactChange}
                           />
                           <TextInputGroup 
                              label="Phone"
                              name="phone"
                              value={phone}
                              placeholder="Enter phone..."
                              onChange={this.onContactChange}
                           />
                           <input 
                              type="submit"
                              value="Add Contact"
                              className="btn btn-primary btn-block"
                           />
                        </form>
                     </div>
                  </div>
               )
            }}
         </Consumer>
      );
   }
}

export default AddContact;