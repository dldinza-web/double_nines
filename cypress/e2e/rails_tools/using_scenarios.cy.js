describe('Rails using scenarios examples', function() {
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
  })

  it('setup basic scenario', function() {
    cy.appScenario('basic')
    cy.visit('/')
  })


  it('example of missing scenario failure', function() {
    cy.visit('/')
    cy.appScenario('basic')
  })

  it('example of missing app failure', function() {
    cy.visit('/')
    cy.appScenario('basic')
    //cy.app('run_me') // uncomment these if you want to see what happens
  })
})
