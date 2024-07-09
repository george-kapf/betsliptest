// cypress/integration/betslip.spec.js

describe('Betslip functionality on bet365', () => {

    beforeEach(() => {
      // Navigate to the bet365 homepage
      cy.visit('https://www.bet365.com/');
    });
  
    it('should add a bet to the betslip', () => {
      cy.get('[data-sport="sports"]').click(); // Click on Sports tab
      cy.contains('Football').click(); // Select Football
      cy.contains('Premier League').click(); // Pick Premier League
      cy.contains('Match Bet').first().click(); // Add a match bet to the betslip
  
      // Verify the bet is added to the betslip
      cy.get('.betslip').should('contain', 'Match Bet');
    });
  
    it('should remove a bet from the betslip', () => {
      // Add a bet to the betslip first
      cy.get('[data-sport="sports"]').click();
      cy.contains('Football').click();
      cy.contains('Premier League').click();
      cy.contains('Match Bet').first().click();
  
      // Remove the bet from the betslip
      cy.get('.betslip .remove-bet').click();
  
      // Verify the betslip is empty
      cy.get('.betslip').should('not.contain', 'Match Bet');
    });
  
    it('should update the stake amount', () => {
      // Add a bet to the betslip first
      cy.get('[data-sport="sports"]').click();
      cy.contains('Football').click();
      cy.contains('Premier League').click();
      cy.contains('Match Bet').first().click();
  
      // Update the stake amount
      cy.get('.betslip .stake-input').clear().type('50');
  
      // Verify the stake amount is updated
      cy.get('.betslip .stake-input').should('have.value', '50');
      // Verify the potential returns are updated accordingly
      cy.get('.betslip .potential-returns').should('contain', 'Updated Returns'); // Adjust as per actual selector and content
    });
  
  });
  