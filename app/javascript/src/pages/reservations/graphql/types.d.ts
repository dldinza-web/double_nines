import { Moment } from "moment"

export type Vehicle = {
  color: string
  id: number | string
  make: string
  model: string
  vin: string
  __typename:  "Vehicle"
}

export type Location = {
  address: string
  address1: string
  address2?: string
  city: string
  countryCode: string
  id: string | number
  state: string
  zipCode: number
  __typename: "Location"
}

export type Person = {
  firstName: string
  fullName?: string
  id: string | number
  lastName: string
  __typename: "Person"
}

export type InputReservation = {
  id?: number
  personId: string | number
  vehicleId: string | number
  departureTime: DateTime | Moment | string
  locationFromId: string | number
  locationToId: string | number
}

export interface RecordReservation {
  "__typename": "Reservation"
  id: number | string
  person: {
    id: number | string
    fullName: string
    "__typename": "Person"
  },
  vehicle: {
    id: number | string
    vin: string
    "__typename": "Vehicle"
  },
  locationFrom: {
    id: number | string
    address: string
    "__typename": "Location"
  },
  departureTime: string | Moment | DateTime,
  locationTo: {
    id: number | string
    address: string
    "__typename": "Location"
  }
}

export type AlertMessage = {
  type: "error" | "success"
  message: string
}
