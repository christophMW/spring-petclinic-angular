describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Specialties').click()
  })
})
