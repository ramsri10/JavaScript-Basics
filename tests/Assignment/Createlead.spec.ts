import test from "@playwright/test";

test("create lead", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('Demosalesmanager')//css by id
    await page.locator('[name=PASSWORD]').fill('crmsfa')// css by name
    await page.locator("//input[@class='decorativeSubmit']").click()//xpath
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Create Lead']`).click()
    await page.locator(`[id=createLeadForm_companyName]`).fill('Amazon')
    await page.locator(`[id=createLeadForm_firstName]`).fill('Sriram')
    await page.locator(`[id=createLeadForm_lastName]`).fill('Sivakumar')
    await page.locator(`[id=createLeadForm_firstNameLocal]`).fill('Sriram')
    // await page.locator(`[id=createLeadForm_lastName]`).fill('Sivakumar')
    await page.locator(`#createLeadForm_personalTitle`).fill('Mr')
    await page.locator(`[id=createLeadForm_generalProfTitle]`).fill('Automation Analyst')
    await page.locator(`#createLeadForm_annualRevenue`).fill('50LPA')
    await page.selectOption("[id='createLeadForm_currencyUomId']", { value: "INR" })
    await page.locator("#createLeadForm_industryEnumId").selectOption( { label: "Computer Software" })
    await page.locator(`#createLeadForm_departmentName`).fill('IT')
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('7845174333')
    await page.locator('.smallSubmit').click()

    let first = await page.locator("[id='viewLead_firstName_sp']").textContent()//to get the text on the page
    let last = await page.locator("[id='viewLead_lastName_sp']").textContent()
    let status = await page.locator("[id='viewLead_statusId_sp']").textContent()
    console.log(`firstname is ${first}, lastname is ${last},${await page.title()} & status is ${status} `);
    
   // await page.title()
    await page.waitForTimeout(5000)


})