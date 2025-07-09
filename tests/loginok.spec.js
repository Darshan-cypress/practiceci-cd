import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/Loginpage';
import loginData from '../testdata/loginData.json';

test.describe('OrangeHRM Login POM', () => {
    test('verify_login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateTo();
        await loginPage.login(loginData.username, loginData.password);
       
    });
});
