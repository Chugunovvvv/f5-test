import { gql } from "@apollo/client";
const GET_DATA_FOR_PRINT = gql`
  query GetDataForPrint($id: Int!) {
    orderLine(id: $id) {
      name
      status
      product {
        name
      }
      finishByDate
      jobs {
        state
        area {
          name
          costPerHour
        }
        name
      }
      ingredients {
        quantity
        notes
        sourceProduct {
          name
        }
      }
      graph
    }
  }
`;
export default GET_DATA_FOR_PRINT;
