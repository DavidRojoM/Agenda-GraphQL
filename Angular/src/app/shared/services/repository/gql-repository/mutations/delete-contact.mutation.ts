import { gql } from 'apollo-angular';

export const deleteContactMutation = gql`
  mutation deleteContact($deleteContactData: DeleteContactInput!) {
    deleteContact(deleteContactData: $deleteContactData) {
      _id
      name
      surname
      address
      dni
      phone
    }
  }
`;
