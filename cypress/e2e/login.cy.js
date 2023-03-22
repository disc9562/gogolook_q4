describe('Test login 104', () => {
    beforeEach(() => {
      cy.visit('https://www.104.com.tw/jobs/main/')
    })

    it('Get User Name', () => {
      const userName = ''

      cy.get('#global_bk > ul > li.right > ul > li:nth-child(6) > a').contains('登入').as('loginButton')
      cy.get('@loginButton').click()
      cy.get('#username').type(Cypress.env('account'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('#submitBtn').click()
      cy.get('a#name_link').click()
      cy.get('a').contains('My104會員中心').invoke("removeAttr", "target").click()
      cy.get('div.h2.mb-3').contains(userName).should('be.visible')
      cy.get('#global_bk > ul > li.right > ul > li:nth-child(5) > a').contains('登出').click()
      cy.get('@loginButton').should('be.visible')
      })
})