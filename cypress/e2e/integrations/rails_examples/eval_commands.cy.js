describe('Rails Other examples', function() {
  it('cypress eval', function() {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
    cy.appEval("FactoryBot.create(:location)")
    cy.appEval("FactoryBot.create(:user)")

    cy.visit('/')
  })

  it('runs multiple commands', function() {
    cy.appCommands([{ name: 'clean' },
                    { name: 'scenarios/basic' },
                    { name: 'eval', options: "FactoryBot.create(:location)" }])
    cy.visit('/')
  })
})
