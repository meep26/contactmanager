import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';


class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
   };   

   onSubmit = async (dispatch, e) => {
      e.preventDefault();
      
      const { name, email, phone } = this.state;

      // Field validations
      if (name === '') {
         this.setState({
            errors: {
               name: 'Name is required'
            }
         });
         return;
      }

      if (email === '') {
         this.setState({
            errors: {
               email: 'Email is required'
            }
         });
         return;
      }

      if (phone === '') {
         this.setState({
            errors: {
               phone: 'Phone is required'
            }
         });
         return;
      }

      const newContact = {
         name,
         email,
         phone,
      };
      
      try {
         const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
         dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
         });
      }
      catch (error) {
         console.log(error);
      }

      // Clear fields
      this.setState({
         name: '',
         email: '',
         phone: '',
         errors: {}
      });

      // redirect to the link
      this.props.history.push('/');
   };

   onContactChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   render() {
      const { name, email, phone, errors } = this.state;

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
                              error={errors.name}
                              onChange={this.onContactChange}
                           />
                           <TextInputGroup 
                              label="Email"
                              type="email"
                              name="email"
                              value={email}
                              placeholder="Enter email..."
                              error={errors.email}
                              onChange={this.onContactChange}
                           />
                           <TextInputGroup 
                              label="Phone"
                              name="phone"
                              value={phone}
                              placeholder="Enter phone..."
                              error={errors.phone}
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