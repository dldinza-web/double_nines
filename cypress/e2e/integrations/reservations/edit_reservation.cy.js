describe("Edit Reservation", () => {
  it("changes values", () => {
    cy.get('table#reservations-table tbody tr:first-of-type td:first-of-type').as('cellDriverFullName')

    cy.get('table#reservations-table tbody tr:first-of-type td:last-of-type')
      .find('a[data-test-id="edit-link"]')
      .click()

    cy.selectDropdown('#select-drivers', 'drivers-label', 2)

    cy.get('button#btn-submit')
      .click()

    cy.get('div.MuiAlert-standardSuccess')
      .should('be.visible')
      .should('have.text', "The Reservation has been updated successfully.")
  })
})
