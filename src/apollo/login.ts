import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, login: $email) {
      accessToken
    }
  }
`;
export default LOGIN_MUTATION;
