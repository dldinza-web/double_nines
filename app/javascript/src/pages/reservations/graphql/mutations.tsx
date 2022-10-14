import { gql } from "@apollo/client";

export const mutationUpdateReservation = gql`
  mutation UpdateReservation(
    $id: ID!,
    $personId: ID!,
    $vehicleId: ID!,
    $locationFromId: ID!,
    $departureTime: ISO8601DateTime!,
    $locationToId: ID!
  ) {
    updateReservation(
      input: {
        id: $id,
        personId: $personId,
        vehicleId: $vehicleId,
        locationFromId: $locationFromId,
        departureTime: $departureTime,
        locationToId: $locationToId
      }
    ) {
      reservation {
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
          address
        }
      }
    }
  }
`

export const mutationRemoveReservation = gql`
  mutation RemoveReservation(
    $reservationId: ID!
  ) {
    removeReservation(
      input: {
        reservationId: $reservationId
      }
    ) {
      reservation {
        id
      }
    }
  }
`

export const mutationCreateReservation = gql`
  mutation CreateReservation(
    $personId: ID!,
    $vehicleId: ID!,
    $locationFromId: ID!,
    $departureTime: ISO8601DateTime!,
    $locationToId: ID!
  ) {
    createReservation(
      input: {
        personId: $personId,
        vehicleId: $vehicleId,
        locationFromId: $locationFromId,
        departureTime: $departureTime,
        locationToId: $locationToId
      }
    ) {
      reservation {
        id
        person {
          fullName
        },
        vehicle {
          vin
        },
        locationFrom {
          address
        },
        departureTime
        locationTo {
          address
        }
      }
    }
  }
`
