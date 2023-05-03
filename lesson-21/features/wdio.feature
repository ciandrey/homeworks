Feature: WebdriverIO web testing

  Background: I open main page
    Given I navigate to home page webdriver.io

  Scenario: check home page
    When I should see the main picture
    Then I have the right title 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'

  Scenario: check header tab
    When I click tab "v8"
    Then I expect that page have contain right text 'WebdriverIO documentation versions'
    When I click tab "github-link"
    Then I expect that tab "github-link" navigate to 'https://github.com/webdriverio/webdriverio'

  Scenario: check search field
    When I click search button
    And I enter the word 'browser' and click 1 link
    Then I expect that url have contain right text 'browser'
    And I expect that article have contain right text 'browser'
