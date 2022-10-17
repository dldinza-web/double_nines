import * as React from 'react'
import { render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import '@testing-library/jest-dom'
import ReservationList from './reservation-list';

describe("Reservations List", () => {
  test('renders', () => {
    const rendered = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ReservationList
          onSetEditReservation={() => {}}
          reservations={[]}
          onAfterRemovingReservation={() => {}}
        />
      </MockedProvider>
    )

    expect(rendered.container).toBeInTheDocument();
  });
})

