import { gql } from "@apollo/client";
const GET_PRODUCTS = gql`
  query GetProducts($withArchived: Boolean = false) {
    products(withArchived: $withArchived) {
      id
      name
      description
      minLimit
      process {
        name
      }
      createdAt
    }
  }
`;
export default GET_PRODUCTS;
