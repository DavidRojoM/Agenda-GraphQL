import { gql } from 'apollo-angular';

export const addContactMutation = gql`
  mutation addContact($addContactData: AddContactInput!) {
    addContact(addContactData: $addContactData) {
      _id
      name
      surname
      address
      dni
      phone
    }
  }
`;
