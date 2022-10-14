import * as React from 'react'
import BoxContainer from '../../components/shared/box-container/box-container'
import ReservationForm from './components/form/reservation-form'
import ReservationList from './components/list/reservation-list'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@apollo/client';
import { queryReservations } from './graphql/queries';
import { InputReservation, RecordReservation } from './graphql/types';
import { constReservation } from './constants/reservation.constants';

const ReservationsPage = () => {
  const responseReservations = useQuery(queryReservations)

  const [reservation, setReservation] = React.useState<InputReservation>(constReservation)

  const reservations = !responseReservations.loading && !responseReservations.error
    ? responseReservations.data.reservations
    : []

  const onAfterSavingReservation = () => {
    responseReservations.refetch()
  }

  const onAfterRemovingReservation = () => {
    responseReservations.refetch()
  }

  const onSetEditReservation = (reservation: InputReservation) => {
    setReservation(reservation)
  }

  return (
    <>
      <BoxContainer
        title="Manage Reservation"
        width="600px"
      >
        <ReservationForm
          onAfterSavingReservation={onAfterSavingReservation}
          reservation={reservation}
        />
      </BoxContainer>

      <BoxContainer title="List of Reservations">
        <ReservationList
          onSetEditReservation={onSetEditReservation}
          reservations={reservations}
          onAfterRemovingReservation={onAfterRemovingReservation}
        />
      </BoxContainer>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default ReservationsPage
