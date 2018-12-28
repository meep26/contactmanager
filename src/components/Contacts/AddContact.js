import React, { Component } from 'react';

class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: ''
   };

   onContactChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
   }

   render() {
      const { name, email, phone } = this.state;
      return (
         <div className="card mb-3">
            <div className="card-header">
               <h3 className="card-title">Add Contact</h3>
            </div>
            <div className="card-body">
               <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input 
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter name..."
                        defaultValue={name}
                        onChange={this.onContactChange}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input 
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter email..."
                        defaultValue={email}
                        onChange={this.onContactChange}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="phone">Phone</label>
                     <input 
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Enter phone..."
                        defaultValue={phone}
                        onChange={this.onContactChange}
                     />
                  </div>
                  <input 
                     type="submit"
                     value="Add Contact"
                     className="btn btn-primary btn-block"
                  />
               </form>
            </div>
         </div>
      );
   }
}

export default AddContact;