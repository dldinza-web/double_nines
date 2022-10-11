import React from 'react'
import BoxContainer from '../../components/shared/box-container/box-container'
import ReservationForm from './form/reservation-form'
import ReservationList from './list/reservation-list'

const ReservationsPage = () => {
  return (
    <>
      <BoxContainer
        title="Manage Reservation"
        width="600px"
      >
        <ReservationForm/>
      </BoxContainer>

      <BoxContainer title="List of Reservations">
        <ReservationList />
      </BoxContainer>
    </>
  )
}

export default ReservationsPage
