import moment from 'moment'

describe('Create Reservations', () => {
  it('inserts parameters and creates', () => {
    cy.visit('/')

    cy.selectDropdown('#select-drivers', 'drivers-label')

    cy.selectDropdown('#select-vehicles', 'vehicles-label')

    cy.selectDropdown('#select-location-from', 'location-from-label')

    cy.selectDropdown('#select-location-to', 'location-to-label', 1)

    cy.get('button#btn-submit')
      .click()

    cy.get('div.MuiAlert-standardSuccess')
      .should('be.visible')
      .should('have.text', "The Reservation has been created successfully.")

    cy.get('div.MuiAlert-standardSuccess')
      .should('not.be.exist')
  })
})
