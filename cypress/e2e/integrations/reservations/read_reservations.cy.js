import GraphqlClient from '../../../support/graphql/api'
import { queryReservations } from '../../../support/graphql/queries'
import moment from 'moment'

describe("Read Reservations", () => {
  it("show the reservation list", () => {
    cy.visit('/')

    const checkQtyRecordsDisplayed = (recordsQty = 0) => {
      cy.get('table#reservations-table tbody tr')
        .should('have.length', recordsQty)
    }

    const checkRecordDisplayed = (record) =>{
      cy.get('table#reservations-table tbody tr:first-of-type td')
        .then($td => {
          expect($td[0]).to.have.text(record.person.fullName)
          expect($td[1]).to.have.text(record.vehicle.vin)
          expect($td[2]).to.have.text(record.locationFrom.address)
          expect($td[3]).to.have.text(moment(record.departureTime).format('llll'))
          expect($td[4]).to.have.text(record.locationTo.address)
        })
    }

    cy.wrap(GraphqlClient.query({ query: queryReservations }))
      .then(response => {
        checkQtyRecordsDisplayed(response.data.reservations.length)
        checkRecordDisplayed(response.data.reservations[0])
      })
  })
})
