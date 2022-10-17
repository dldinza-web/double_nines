describe("Remove Reservation", () => {
  it("remove a reservation from the list", () => {
    cy.get('table#reservations-table tbody tr:first-of-type td:last-of-type')
      .find('a[data-test-id="remove-link"]')
      .click()

    cy.get('div[data-test-id="dialog-remove-reservation"]')
      .find('button[data-test-id="btn-delete"]')
      .click()

    cy.get('div[data-test-id="container-reservation-list"]')
      .find('div.MuiAlert-standardSuccess')
      .should('be.visible')
      .should('have.text', "The reservation has been removed successfully.")
  })
})
