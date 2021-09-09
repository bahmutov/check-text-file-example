/// <reference types="cypress" />

it('receives the right text file', () => {
  // request the text file using "baseUrl + /text-file" endpoint
  cy.request('/text-file')
    .its('body')
    .then((text) => {
      // cy.writeFile automatically creates the output folder
      cy.writeFile('output/file.txt', text)

      cy.readFile('expected/file.txt').then((expectedText) => {
        expect(text).to.equal(expectedText)
      })

      expect(text).to.include('This is a file')
      expect(text).to.match(/a plain/i)
    })
})

it.only('visits the text file', () => {
  cy.request('/text-file')
    .its('body')
    .then((text) => {
      cy.document().invoke('write', '<pre>' + text + '</pre>')
    })
  cy.contains('This is a file')
})
