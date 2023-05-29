describe('Events spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });



  it('should pick date & time', () => {
    cy.get('.booking-info')
    cy.get('.booking-info__when')
    cy.get('.input').first().click().type('1993-09-23')
    cy.get('.input').eq(1).click().type('20:00')

   
  });


  it('should select how many players', () => {
    cy.get('.booking-info')
    cy.get('.booking-info__when')
    cy.get('.input').eq(2).click().type('4')
    cy.get('.input').eq(3).click().type('2')
  })

  it('should be able to pick shoes', () => {
    cy.get('.shoes')
    cy.get('button').first().click()
    cy.get('.shoes__form')
    cy.get('.input').eq(4).click().type('39')
    
    cy.get('button').eq(1).click()
    cy.get('.shoes__form')
    cy.get('.input').eq(5).click().type('37')

    cy.get('button').eq(2).click()
    cy.get('.shoes__form')
    cy.get('.input').eq(6).click().type('27')

    cy.get('button').eq(3).click()
    cy.get('.shoes__form')
    cy.get('.input').eq(7).click().type('42')
  })


  it('should be able to delete shoe-field', () => {
    cy.get('.shoes')
    cy.get('button').first().click()
    cy.get('button').eq(1).click()
    cy.get('button').first().click()
    cy.get('button').first().click()
   
  })

  it('should be able to send reservation', () => {

    cy.get('.booking-info')
    cy.get('.booking-info__when')
    cy.get('.input').first().click().type('1993-09-23')
    cy.get('.input').eq(1).click().type('20:00')
    cy.get('.booking-info')
    cy.get('.booking-info__when')
    cy.get('.input').eq(2).click().type('4')
    cy.get('.input').eq(3).click().type('2')
    cy.get('.shoes')
    cy.get('button').first().click()
    cy.get('.shoes__form')
    cy.get('.input').eq(4).click().type('39')
    
    cy.get('button').eq(1).click()
    cy.get('.shoes__form')
    cy.get('.input').eq(5).click().type('37')

    cy.get('button').eq(2).click()
    cy.get('.shoes__form')
    cy.get('.input').eq(6).click().type('27')

    cy.get('button').eq(3).click()
    cy.get('.shoes__form')
    cy.get('.input').eq(7).click().type('42')

    cy.get('button').last().click()

  })


  it('should be able to navigate' ,() => {
    cy.get('section')
    cy.get('.navigation__icon').click()
    cy.wait(2000)
    cy.get('a').first().click().visit('http://localhost:5173/')
    
    cy.wait(2000)
    cy.get('section')
    cy.get('.navigation__icon').click()
    cy.get('a').last().click()
  })

})


