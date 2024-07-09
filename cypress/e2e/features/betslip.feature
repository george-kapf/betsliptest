Feature: Betslip functionality on bet365

  Scenario: Add a bet to the betslip
    Given I am on the bet365 homepage
    When I select "Football" in the "Sports" tab
    And I pick the "Premier League"
    And I add a match bet to the betslip
    Then the bet should be added to the betslip

  Scenario: Remove a bet from the betslip
    Given I have a bet in the betslip
    When I remove the bet from the betslip
    Then the betslip should be empty

  Scenario: Update the stake amount
    Given I have a bet in the betslip
    When I update the stake amount to "50"
    Then the stake amount should be "50"
    And the potential returns should be updated accordingly
