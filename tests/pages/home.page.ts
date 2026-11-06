 import {type Page, Locator} from '@playwright/test';
 
 
 export class HomePage {
     readonly page: Page;
     readonly homePageHedingText : Locator;
     readonly inventoryContainer : Locator;
     readonly inventaryItems : Locator;
     readonly addToCartButton : Locator;
     readonly removeFromCartButton : Locator;
     readonly cartButton : Locator;
     readonly cartTitle : Locator;
     readonly cartItemCount : Locator;
     readonly cartItemName : Locator;
     readonly cartItemPrice : Locator;
     readonly checkoutButton : Locator;
     readonly continueShoppingButton : Locator;
    readonly checkoutInformationTitle : Locator;
    readonly checkoutInformationFirstNameInput : Locator;
    readonly checkoutInformationLastNameInput : Locator
    readonly checkoutInformationPostalCodeInput : Locator;
    readonly checkoutInformationContinueButton : Locator;
    readonly checkoutInformationCancelButton : Locator;
    readonly checkoutOverviewTitle : Locator;
    readonly checkoutOverviewFinishButton : Locator;
    readonly successfulCheckoutTitle : Locator;
    readonly successfulCheckoutMessage : Locator;
    readonly backToHomeButton : Locator;




     

 
     constructor(page: Page) {
         this.page = page;
 
          // Locators
         this.homePageHedingText = this.page.getByText("Swag Labs"); 
         this.inventoryContainer = this.page.getByTestId('inventory_container');
         this.inventaryItems = this.inventoryContainer.locator('[data-test="inventory-item-name"]');
         this.addToCartButton = this.page.getByRole('button', { name: 'Add to cart' });
         this.removeFromCartButton = this.page.getByRole('button', { name: 'Remove' });
         this.cartButton = this.page.locator('[data-test="shopping-cart-link"]');
         this.cartTitle = this.page.getByText("Your Cart");
        this.cartItemCount = this.page.locator('.shopping_cart_badge');
        this.cartItemName = this.page.locator('.inventory_item_name');  
        this.cartItemPrice = this.page.locator('.inventory_item_price');
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
        this.continueShoppingButton = this.page.getByRole('button', { name: 'continue' });
        this.checkoutInformationTitle = this.page.getByText("Checkout: Your Information");
        this.checkoutInformationFirstNameInput = this.page.getByPlaceholder("First Name");
        this.checkoutInformationLastNameInput = this.page.getByPlaceholder("Last Name");
        this.checkoutInformationPostalCodeInput = this.page.getByPlaceholder("Zip/Postal Code");
        this.checkoutInformationContinueButton = this.page.getByRole('button', { name: 'Continue' });
        this.checkoutInformationCancelButton = this.page.getByRole('button', { name: 'Cancel' });
        this.checkoutOverviewTitle = this.page.getByText("Checkout: Overview");
        this.checkoutOverviewFinishButton = this.page.getByRole('button', { name: 'Finish' });
        this.successfulCheckoutTitle = this.page.getByRole('heading', { name: 'Thank you for your order!' });
        this.successfulCheckoutMessage = this.page.getByText("Your order has been dispatched, and will arrive at your door.");
        this.backToHomeButton = this.page.getByRole('button', { name: 'Back Home' });

     }
 
 
     async getCurrentPageURL () {
         await this.page.waitForLoadState('load');
         return this.page.url();
     }
 
    async getHomePageHeadingText () {
        return await this.homePageHedingText.textContent();
    }

    async getInventoryContainerVisibility () {
        return await this.inventoryContainer.isVisible();
    }

    async getInventoryItemsVisibility () {
        return await this.inventaryItems.isVisible();
    }

    async getInventoryItemsText () {
        return await this.inventaryItems.allTextContents();
    }

    async clickAddToCartButton () {
        await this.addToCartButton.nth(0).click();
    }

    async clickRemoveFromCartButton () {
        await this.removeFromCartButton.nth(0).click();
    }
    
    async clickCartButton () {
        await this.cartButton.click();
    }

    async clickCheckoutButton () {  
        await this.checkoutButton.click();
    }

    async getCartItemCount () {
        return await this.cartItemCount.textContent();
    }

    async getCartItemName () {
        return await this.cartItemName.textContent();
    }

    async getCartItemPrice () {
        return await this.cartItemPrice.textContent();
    }   
    
    async clickContinueShoppingButton () {
        await this.continueShoppingButton.click();
    }

    async getCheckoutInformationTitleText () {
        return await this.checkoutInformationTitle.textContent();
    }

    async fillCheckoutInformationForm (firstName: string, lastName: string, postalCode: string) {
        await this.checkoutInformationFirstNameInput.fill(firstName);
        await this.checkoutInformationLastNameInput.fill(lastName);
        await this.checkoutInformationPostalCodeInput.fill(postalCode);
    }

    async clickCheckoutInformationContinueButton () {
        await this.checkoutInformationContinueButton.click();
    }

    async clickCheckoutInformationCancelButton () {
        await this.checkoutInformationCancelButton.click();
    } 

    async getCheckoutOverviewTitleText () {
        return await this.checkoutOverviewTitle.textContent();
    }

    async clickCheckoutOverviewFinishButton () {
        await this.checkoutOverviewFinishButton.click();
    }

    async getSuccessfulCheckoutTitleText () {
        return await this.successfulCheckoutTitle.textContent();
    }

    async getSuccessfulCheckoutMessageText () {
        return await this.successfulCheckoutMessage.textContent();
    }

    async clickBackToHomeButton () {
        await this.backToHomeButton.click();
    }

 }
 
 