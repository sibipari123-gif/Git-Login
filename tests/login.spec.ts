import {test} from "@playwright/test"

test("Login Function",async({page})=>{

    // Navigate to the Salesforce login page

    await page.goto("https://login.salesforce.com/?locale=in");

    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('[id="Login"]').click();
    await page.locator('.password').fill("TestLeaf@2025");
    page.locator('#Login').click();
    page.getByRole('button', { name: 'App Launcher' }).click();



})