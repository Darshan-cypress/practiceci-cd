// pageObject/Login.js
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = 'input[name="username"]'
        this.password = 'input[name="password"]'
        this.login_button = 'button[type="submit"]'
    }

    async navigateTo() {
        await this.page.goto(process.env.BASE_URL);
    }

    async login(username, password) {
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.login_button).click();

    }
}
