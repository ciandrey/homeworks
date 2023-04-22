const {Page} = require('./page');

class LoginPage extends Page {
    constructor() {
        super();
        this.loginWithEmail = '#loginFormLoginEmailLink';
        this.inputEmail  = '.i-input-group__cell .i-input[type="email"]';
        this.inputPassword = '.i-input[type="password"]';
        this.btnSubmit = '.i-popup__form-button[form="loginForm"]';
    };
    
    async login (email, password) {
        await $(this.loginWithEmail).click();
        await $(this.inputEmail).setValue(email);
        await $(this.inputPassword).setValue(password);
        await $(this.btnSubmit).click();
    }   
}

module.exports = { LoginPage };
