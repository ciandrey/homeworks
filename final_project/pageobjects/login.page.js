const { Page } = require('./page');
const { BaseElement } = require('../helpers/baseelement');

const I = new BaseElement();

class LoginPage extends Page {
  constructor() {
    super();
    this.loginWithEmail = '#loginFormLoginEmailLink';
    this.inputEmail = '.i-input-group__cell .i-input[type="email"]';
    this.inputPassword = '.i-input[type="password"]';
    this.btnSubmit = '.i-popup__form-button[form="loginForm"]';
  }

  async login(email, password) {
    await I.clickElement(this.loginWithEmail);
    await I.inputText(this.inputEmail, email);
    await I.inputText(this.inputPassword, password);
    await I.clickElement(this.btnSubmit);
  }
}

module.exports = { LoginPage };
