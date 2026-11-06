import {test as base,} from '@playwright/test'; 
import { LoginPage } from '../pages/login.page';


type LoginFixture = {
    loginPage: LoginPage;
};

export const loginFixture = base.extend<LoginFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});



