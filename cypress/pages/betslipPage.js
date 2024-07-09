class BetSlipPage {
    navigate() {
      cy.visit('/');
    }
  
    selectSport(sport) {
      cy.get('[data-sport="sports"]').click();
      cy.contains(sport).click();
    }
  
    selectLeague(league) {
      cy.contains(league).click();
    }
  
    addMatchBet() {
      cy.contains('Match Bet').first().click();
    }
  
    verifyBetAdded() {
      cy.get('.betslip').should('contain', 'Match Bet');
    }
  
    removeBet() {
      cy.get('.betslip .remove-bet').click();
    }
  
    verifyBetRemoved() {
      cy.get('.betslip').should('not.contain', 'Match Bet');
    }
  
    updateStake(amount) {
      cy.get('.betslip .stake-input').clear().type(amount);
    }
  
    verifyStakeUpdated(amount) {
      cy.get('.betslip .stake-input').should('have.value', amount);
    }
  
    verifyPotentialReturns(updatedReturns) {
      cy.get('.betslip .potential-returns').should('contain', updatedReturns); // Adjust as per actual selector and content
    }
  }
  
  export const betSlipPage = new BetSlipPage();
  