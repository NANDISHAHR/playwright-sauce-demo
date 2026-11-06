import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { testdata} from '../testdata/constat';





test.describe('Login Page fuctionality for Sauce Demo', () => {

    

    test('Add product to cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        
        // Scenario : Login
        await loginPage.goto();
        await loginPage.login(testdata.USER_NAME, testdata.PASSWORD);
        expect(page.url()).toBe(testdata.HOME_PAGE_URL);
        const headingText = await homePage.getHomePageHeadingText();
        expect(headingText).toContain(testdata.HOME_PAGE_TITLE );
      
        // Scennario 2 : Add product to cart and checkout
        await homePage.clickAddToCartButton();
        const cartItemCount = await homePage.getCartItemCount();
         expect(cartItemCount).toBe('1');

        await homePage.clickCartButton();
        await homePage.clickCheckoutButton();
        await homePage.fillCheckoutInformationForm(testdata.USER_NAME, testdata.PASSWORD, testdata.CODE);
        await homePage.clickContinueShoppingButton();
        const checkoutTitleText = await homePage.getCheckoutInformationTitleText();
        expect(checkoutTitleText).toBe('Checkout: Your Information');

        await homePage.clickCheckoutOverviewFinishButton();
        const successfulCheckoutTitleText = await homePage.getSuccessfulCheckoutTitleText();
        expect(successfulCheckoutTitleText).toBe('Thank you for your order!');

        await homePage.clickBackToHomeButton();
        const currentURL = await homePage.getCurrentPageURL();
        expect(currentURL).toBe(testdata.HOME_PAGE_URL);

    });
}); 