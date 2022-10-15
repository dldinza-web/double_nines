describe('More Rails using factory bot examples', function() {
  beforeEach(() => {
    cy.app('clean')
  })

  it('using response from factory bot', function() {
    cy.appFactories([
      ['create', 'person'],
      ['create', 'user']
    ])
      .then((results) => {
        cy.visit('/')

        console.log('one result', results[0])
      });
  })
})
