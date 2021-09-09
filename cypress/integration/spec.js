/// <reference types="cypress" />

const mdToHtml = require('nano-markdown')

beforeEach(() => {
  cy.document().invoke('open')
})

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

it('visits the text file', () => {
  cy.request('/text-file')
    .its('body')
    .then((text) => {
      cy.document().invoke('write', '<pre>' + text + '</pre>')
    })
  cy.contains('This is a file')
})

it('visits the Markdown file', () => {
  cy.request('/markdown-file')
    .its('body')
    .then((text) => {
      cy.document().invoke('write', '<pre>' + text + '</pre>')
    })
  cy.contains('- one')
  cy.contains('- two')
  cy.contains('- three')
})

it('converts the Markdown file', () => {
  cy.request('/markdown-file')
    .its('body')
    .then(mdToHtml)
    .then((html) => {
      cy.document().invoke('write', html)
    })
  cy.contains('h1', 'Example Topic')
  cy.get('li')
    .should('have.length', 3)
    .and(($list) => {
      expect($list[0]).to.contain('one')
      expect($list[1]).to.contain('two')
      expect($list[2]).to.contain('three')
    })
})
