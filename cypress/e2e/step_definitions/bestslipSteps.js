import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { betSlipPage } from "C:\Users\hp\cypress-bet365\cypress\pages ";

Given('I am on the bet365 homepage', () => {
  betSlipPage.navigate();
});

When('I select {string} in the {string} tab', (sport, tab) => {
  betSlipPage.selectSport(sport);
});

When('I pick the {string}', (league) => {
  betSlipPage.selectLeague(league);
});

When('I add a match bet to the betslip', () => {
  betSlipPage.addMatchBet();
});

Then('the bet should be added to the betslip', () => {
  betSlipPage.verifyBetAdded();
});

Given('I have a bet in the betslip', () => {
  betSlipPage.navigate();
  betSlipPage.selectSport('Football');
  betSlipPage.selectLeague('Premier League');
  betSlipPage.addMatchBet();
});

When('I remove the bet from the betslip', () => {
  betSlipPage.removeBet();
});

Then('the betslip should be empty', () => {
  betSlipPage.verifyBetRemoved();
});

When('I update the stake amount to {string}', (amount) => {
  betSlipPage.updateStake(amount);
});

Then('the stake amount should be {string}', (amount) => {
  betSlipPage.verifyStakeUpdated(amount);
});

Then('the potential returns should be updated accordingly', () => {
  betSlipPage.verifyPotentialReturns('Updated Returns'); // Adjust as per actual selector and content
});
