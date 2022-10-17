import { gql } from '@apollo/client';

export const queryReservations = gql`
{
  reservations {
    id
    person {
      id
      fullName
    },
    vehicle {
      id
      vin
    },
    locationFrom {
      id
      address
    },
    departureTime
    locationTo {
      id
      address
    }
  }
}
`
