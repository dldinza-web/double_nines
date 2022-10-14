import { gql } from "@apollo/client";

export const queryVehicles = gql`
  query {
    vehicles {
      id
      make
      model
      vin
      color
    }
  }
`

export const queryPeople = gql`
{
  people {
  	id
    firstName
    lastName
    fullName
	}
}
`

export const queryLocation = gql`
{
  locations {
    id
    address1
    address2
    city
    state
    zipCode
    countryCode
    address
  }
}
`

export const queryUser = gql`
{
  user {
    id
    username
    person {
      id
      fullName
    }
  }
}
`

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

