import {type Page, Locator} from '@playwright/test';
import { testdata } from '../testdata/constat';


export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

         // Locators
        this.usernameInput = this.page.getByPlaceholder("Username");
        this.passwordInput = this.page.getByPlaceholder("Password");
        this.loginButton = this.page.getByRole('button', { name: 'Login' });

    }


    async goto () {
        await this.page.goto(testdata.LOGIN_PAGE_URL);
    }

    async login (username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    } 
}

