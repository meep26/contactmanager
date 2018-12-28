import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
   state = {
      contacts: [
         {
            id: 1,
            name: 'John Doe',
            email: 'jdoe@gmail.com',
            phone: '555-5555-555'
         },
         {
            id: 2,
            name: 'Karen Williams',
            email: 'karen@gmail.com',
            phone: '123-456-555'
         },
         {
            id: 3,
            name: 'Henry Johnny',
            email: 'henry@gmail.com',
            phone: '000-123-123'
         }
      ]
   };

   deleteContact = (id) => {
      const { contacts } = this.state;

      const newContacts = contacts.filter(contact => contact.id !== id );

      this.setState({
         contacts: newContacts
      });

   }

   render() {
      const { contacts } = this.state;

      return (
         <React.Fragment>
            {
               contacts.map(contact => {
                  return (
                     <Contact 
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                     />
                  );
               })
            }
         </React.Fragment>
      );
   };
}

export default Contacts;