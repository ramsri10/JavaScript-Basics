//playwright to handle the alert -> Auto dismiss the alert
//cancel your alert

import test,{expect} from '@playwright/test'

test.only("Auto dismiss the alert", async ({ page }) => {

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("//span[text()='Show']").nth(1).click()// PW will automatically dismiss the alerts 

console.log(await page.locator(`//span[@id='result']`).innerText());

await page.waitForTimeout(10000)

})

//Event Listner to handle the alert
//page.on-> handle all the alert which present in the test case
//page.once -> handle only one alert which present in the test case(first alert)

test("Handle alert with Page.on Simple alert", async ({ page }) => {

    //handle first alert present in the test case
    page.once('dialog', alert => {
        // type of alert
        const type = alert.type()
        console.log(type)
        //alert box what message it has 
        console.log(alert.message())
        //handle alert 
        alert.accept()
    })


    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(10000)
    // await page.locator("//span[text()='Show']").nth(1).click()
    // await page.waitForTimeout(10000)
})


test("Handle Alert with page.on", async ({ page }) => {

    page.on('dialog', type => {
        const alertName = type.type()
        //alert name=> alert,confirm,prompt
        console.log(alertName)
        console.log(type.message())

        if (alertName === 'confirm') {
            //alert===confirm
            //confirm===confirm
            // type.dismiss()
            type.accept()
        } else {
            type.accept()
        }
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    //alert=> simple alert
    await page.waitForTimeout(5000)
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(5000)
})

test("handle the sweet alert", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(2).click()
    await page.waitForTimeout(3000)
    await page.locator("//span[@class='ui-icon ui-icon-closethick']").first().click()
    await page.waitForTimeout(10000)
})


test("Prompt alert", async ({ page }) => {

    page.once('dialog', prompt => {
        const pt = prompt.type()
        console.log(pt);
        console.log(prompt.message());
        prompt.accept("sriram")

    })
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(4).click()
   // await page.waitForTimeout(10000)

   let result = await page.locator("//span[@id='confirm_result']").innerText()//to get the text inside the element
    
   expect(result.toUpperCase()).toContain('SRIRAM')
    
    
})
