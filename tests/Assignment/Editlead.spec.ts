import { test } from "@playwright/test"


test("Edit Lead", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('Demosalesmanager')//css by id
    await page.locator('[name=PASSWORD]').fill('crmsfa')// css by name
    await page.locator("//input[@class='decorativeSubmit']").click()//xpath
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Find Leads']`).click()
    await page.locator(`//input[@id='ext-gen248']`).fill('sriram')
    await page.locator(`//button[text()='Find Leads']`).click()
    await page.locator(`//a[text()='15589']`).click()
    await page.locator(`//a[text()='Edit']`).click()
    await page.locator(`[id=updateLeadForm_companyName]`).fill('CTS')
    await page.locator(`#updateLeadForm_annualRevenue`).fill('15LPA')
    await page.locator('#updateLeadForm_departmentName').fill('Automation Testing')
    await page.locator('#updateLeadForm_description').fill('Automation Testing with 5 years of experience')
    await page.locator('.smallSubmit').first().click()

    let Depar = await page.locator("//span[@id='viewLead_departmentName_sp']").innerText()
    const Company = await page.locator("//span[@id='viewLead_companyName_sp']").textContent()
    const Revenue = await page.locator("//span[@id='viewLead_annualRevenue_sp']").textContent()
    let Des = await page.locator(`//span[@id='viewLead_description_sp']`).textContent()
    console.log(Depar + " " + Company + " " + Revenue + " " + Des);
    console.log(`${await page.title()} `);




})