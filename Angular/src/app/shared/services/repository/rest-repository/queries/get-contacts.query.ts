import { gql } from 'apollo-angular';

export const getContactsQuery = gql`
  query {
    getContacts {
      _id
      name
      surname
      address
      dni
      phone
    }
  }
`;
