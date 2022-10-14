import moment from "moment";
import { InputReservation } from "../graphql/types";

export const constReservation: InputReservation = {
  id: undefined,
  personId: '',
  vehicleId: '',
  departureTime: moment().format(),
  locationFromId: '',
  locationToId: ''
}
