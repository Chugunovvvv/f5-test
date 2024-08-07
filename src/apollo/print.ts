import { gql } from "@apollo/client";
const GET_DATA_FOR_PRINT = gql`
  query GetDataForPrint($id: Int!) {
    orderLine(id: $id) {
      name
      status
      quantity
      description
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
          actualPrice
        }
      }
        consumerReservations {
        targetSalesOrderLine {
        salesOrder {
        name
        }
        }
        }

      graph
    }
  }
`;
export default GET_DATA_FOR_PRINT;
