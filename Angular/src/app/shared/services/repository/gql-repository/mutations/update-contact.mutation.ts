import { gql } from 'apollo-angular';

export const updateContactMutation = gql`
  mutation addContact($updateContactData: UpdateContactInput!) {
    updateContact(updateContactData: $updateContactData) {
      _id
      name
      surname
      address
      dni
      phone
    }
  }
`;
