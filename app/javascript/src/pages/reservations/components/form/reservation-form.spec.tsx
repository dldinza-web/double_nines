import * as React from 'react'
import { render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import ReservationForm from './reservation-form';
import { constReservation } from '../../constants/reservation.constants';
import '@testing-library/jest-dom'
import { queryUser } from '../../graphql/queries';

const userMock = {
  request: {
    query: queryUser
  },
  result: {
    "data":{"user":{"id":"1","username":"aurea@treutel.name","person":{"id":"2","fullName":"Harold Hayes","__typename":"Person"},"__typename":"User"}}
  }
}

describe("Reservation Form", () => {
  test('renders', async () => {
    const rendered = render(
      <MockedProvider mocks={[userMock]} addTypename={true}>
        <ReservationForm
          onAfterSavingReservation={() => {}}
          reservation={constReservation}
        />
      </MockedProvider>
    )

    expect(await rendered.container).toBeInTheDocument();
  });
})

